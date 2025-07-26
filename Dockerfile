# Build stage
FROM node:18-alpine AS builder

WORKDIR /app

# Install pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Fetch all dependencies to the store (cached layer)
RUN pnpm fetch

# Copy OpenAPI schema for type generation
COPY __schemas__ ./__schemas__

# Install all dependencies from store (including dev deps for build)
RUN pnpm install -r --offline --frozen-lockfile

# Copy source code
COPY . .

# Generate API types
RUN mkdir -p ./src/__generated__/api && pnpm run gen:api || echo "// Fallback empty API types" > ./src/__generated__/api/index.ts

# Build Next.js application
RUN pnpm run build

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Install pnpm
RUN corepack enable  
RUN corepack prepare pnpm@latest --activate

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Fetch production dependencies to the store (cached layer)
RUN pnpm fetch --prod

# Copy OpenAPI schema (might be needed at runtime)
COPY __schemas__ ./__schemas__

# Install production dependencies from store
RUN pnpm install -r --offline --prod

# Copy built application
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.ts ./next.config.ts
COPY --from=builder /app/src/__generated__ ./src/__generated__

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

CMD ["pnpm", "start"]