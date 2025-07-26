# Web App Deployment Fix

## Problem Analysis

The deployment failure was caused by `openapi-typescript` not being available during the production Docker build:

### Root Cause
1. `openapi-typescript` is a `devDependency` but required by the `postinstall` script
2. Production builds (`pnpm install --prod`) exclude dev dependencies
3. The `postinstall` script runs during production install, trying to execute `gen:api`
4. `gen:api` command requires `openapi-typescript` which isn't available

### Error Details
```
> [web runner  8/15] RUN pnpm install -r --offline --prod:
. postinstall$ pnpm gen:api
. postinstall: sh: openapi-typescript: not found
. postinstall:  ELIFECYCLE  Command failed.
```

## Solution Implementation

### 1. Multi-Stage Docker Build Optimization

**Key Changes:**
- Generate API types during build stage (where dev dependencies are available)
- Use separate production package.json without postinstall script
- Copy generated types from build stage to production stage
- Optimize build caching and layer efficiency

### 2. File Structure

```
web/
├── Dockerfile                 # Optimized multi-stage build
├── .dockerignore             # Build context optimization
├── package.json              # Development configuration
├── package.prod.json         # Production configuration (no postinstall)
├── scripts/
│   └── build-and-validate.sh # Comprehensive build validation
└── DEPLOYMENT_FIX.md         # This documentation
```

### 3. Docker Build Process

#### Build Stage
1. Install all dependencies (including dev dependencies)
2. Copy OpenAPI schema
3. **Explicitly generate API types** using `pnpm run gen:api`
4. Build Next.js application

#### Production Stage
1. Use production package.json (without postinstall script)
2. Install only production dependencies
3. Copy built artifacts and generated types from build stage
4. Set up secure runtime environment

## Key Optimizations

### 1. Dependency Management
- **Explicit type generation**: Run `gen:api` during build stage with dev dependencies available
- **Production package.json**: Removes postinstall script to prevent production build failures
- **Dependency separation**: Clear distinction between build-time and runtime dependencies

### 2. Build Performance
- **Layer caching**: Optimized COPY order for better Docker layer caching
- **Build context**: `.dockerignore` excludes unnecessary files
- **Multi-stage builds**: Separate concerns between build and runtime environments

### 3. Security & Best Practices
- **Non-root user**: Runs as `nextjs` user with minimal privileges
- **Minimal attack surface**: Production image only contains runtime dependencies
- **Health checks**: Built-in health monitoring endpoint
- **Immutable artifacts**: Generated types are created once and copied

## Deployment Workflow

### 1. Local Development
```bash
# Install dependencies (includes dev dependencies)
pnpm install

# Generate API types (uses openapi-typescript)
pnpm run gen:api

# Start development server
pnpm run dev
```

### 2. Production Build
```bash
# Build Docker image
docker build -t web-app .

# Run container
docker run -p 3000:3000 web-app
```

### 3. Build Validation
```bash
# Run comprehensive validation
./scripts/build-and-validate.sh
```

## Validation Script Features

The `build-and-validate.sh` script provides comprehensive testing:

1. **File Validation**: Ensures all required files exist
2. **Package Configuration**: Validates development vs production package.json
3. **OpenAPI Schema**: Verifies schema validity
4. **Type Generation**: Tests API type generation process
5. **Docker Build**: Full container build and runtime testing
6. **Health Checks**: Validates application health endpoint

## Troubleshooting

### Common Issues

#### 1. OpenAPI Schema Missing
**Error**: `openapi.json not found`
**Solution**: Ensure `__schemas__/openapi.json` exists and is up-to-date

#### 2. Generated Types Outdated
**Error**: TypeScript compilation errors in API usage
**Solution**: Regenerate types with `pnpm run gen:api`

#### 3. Docker Build Cache Issues
**Error**: Stale dependencies or build artifacts
**Solution**: Build with `--no-cache` flag

### Debug Commands

```bash
# Check generated types
ls -la src/__generated__/api/

# Validate OpenAPI schema
node -e "console.log(JSON.parse(require('fs').readFileSync('__schemas__/openapi.json', 'utf8')).info)"

# Test type generation locally
pnpm run gen:api

# Build with detailed output
docker build --no-cache --progress=plain -t web-app .
```

## Best Practices Applied

1. **Build Once, Deploy Anywhere**: Generated artifacts are consistent across environments
2. **Immutable Infrastructure**: Container images are reproducible and cacheable
3. **Security First**: Minimal runtime dependencies and non-root execution
4. **Fast Feedback**: Early validation and comprehensive error reporting
5. **Documentation**: Clear troubleshooting and validation procedures

## Environment Variables

The application supports the following environment variables:

```bash
NODE_ENV=production    # Runtime environment
PORT=3000             # Application port
```

## Health Monitoring

The application includes a health check endpoint at `/api/health` that returns:

```json
{
  "status": "healthy",
  "timestamp": "2025-01-XX...",
  "uptime": 123.45,
  "environment": "production"
}
```

This endpoint is used by Docker's health check mechanism for container monitoring.

---

**Result**: The web app now builds successfully without the `openapi-typescript` dependency issue, with optimized Docker layers, comprehensive validation, and production-ready deployment configuration.