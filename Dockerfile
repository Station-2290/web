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

# Copy OpenAPI schema for type generation (before install to ensure it's available)
COPY __schemas__ ./__schemas__

# Install all dependencies from store (including dev deps for build)
RUN pnpm install -r --offline --frozen-lockfile

# Copy source code
COPY . .

# Explicitly generate API types (ensures they're created with dev dependencies available)
RUN pnpm run gen:api

# Build Next.js application
RUN pnpm run build

# Verify standalone build was created
RUN ls -la .next/standalone/ || (echo "Standalone build failed" && exit 1)

# Production stage
FROM node:18-alpine AS runner

WORKDIR /app

# Copy standalone application (includes all dependencies and runtime)
# Note: standalone includes its own package.json and node_modules
COPY --from=builder /app/.next/standalone ./

# Copy static files
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

# Copy generated API types for runtime (if needed by server components)
COPY --from=builder /app/src/__generated__ ./src/__generated__

# Ensure next.config.js is available (standalone should include it, but copy explicitly)
COPY --from=builder /app/next.config.js ./

# Install wget for health checks
RUN apk add --no-cache wget

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Set ownership
RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"
# Disable package manager auto-install behavior
ENV SKIP_ENV_VALIDATION=1
ENV CI=true
ENV npm_config_yes=true

# Health check
HEALTHCHECK --interval=30s --timeout=10s --start-period=30s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://localhost:3000/api/health || exit 1

# Start the standalone Next.js server
CMD ["node", "server.js"]