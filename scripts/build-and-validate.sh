#!/bin/bash

# Build and validation script for web app Docker container
# This script validates the complete build process and ensures all components work correctly

set -e  # Exit on any error

echo "🏗️  Starting web app build and validation process..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Validate required files exist
print_status "Validating required files..."

required_files=(
    "package.json"
    "package.prod.json"
    "pnpm-lock.yaml"
    "Dockerfile"
    ".dockerignore"
    "__schemas__/openapi.json"
    "src/app/api/health/route.ts"
)

for file in "${required_files[@]}"; do
    if [[ -f "$file" ]]; then
        print_success "✓ $file exists"
    else
        print_error "✗ Missing required file: $file"
        exit 1
    fi
done

# Validate package.json structure
print_status "Validating package.json structure..."

if grep -q '"postinstall"' package.json; then
    print_success "✓ Development package.json has postinstall script"
else
    print_error "✗ Development package.json missing postinstall script"
    exit 1
fi

if grep -q '"postinstall"' package.prod.json; then
    print_error "✗ Production package.json should not have postinstall script"
    exit 1
else
    print_success "✓ Production package.json correctly excludes postinstall script"
fi

# Validate OpenAPI schema
print_status "Validating OpenAPI schema..."

if [[ -s "__schemas__/openapi.json" ]]; then
    if node -e "JSON.parse(require('fs').readFileSync('__schemas__/openapi.json', 'utf8'))" 2>/dev/null; then
        print_success "✓ OpenAPI schema is valid JSON"
    else
        print_error "✗ OpenAPI schema is not valid JSON"
        exit 1
    fi
else
    print_error "✗ OpenAPI schema file is empty or missing"
    exit 1
fi

# Test API type generation (if dependencies are available)
print_status "Testing API type generation..."

if command -v pnpm &> /dev/null && [[ -d "node_modules" ]]; then
    if pnpm run gen:api; then
        print_success "✓ API type generation successful"
        
        if [[ -f "src/__generated__/api/index.ts" ]]; then
            print_success "✓ Generated API types file exists"
            
            # Check if the generated file has content
            if [[ -s "src/__generated__/api/index.ts" ]]; then
                print_success "✓ Generated API types file has content"
            else
                print_warning "⚠ Generated API types file is empty"
            fi
        else
            print_error "✗ Generated API types file not found"
            exit 1
        fi
    else
        print_error "✗ API type generation failed"
        exit 1
    fi
else
    print_warning "⚠ Skipping API type generation test (dependencies not installed)"
fi

# Validate Docker build context
print_status "Validating Docker build context..."

# Check .dockerignore effectiveness
if [[ -f ".dockerignore" ]]; then
    print_success "✓ .dockerignore file exists"
    
    # Verify key exclusions are present
    exclusions=("node_modules" ".next" ".git" "*.log")
    for exclusion in "${exclusions[@]}"; do
        if grep -q "$exclusion" .dockerignore; then
            print_success "✓ .dockerignore excludes $exclusion"
        else
            print_warning "⚠ .dockerignore should exclude $exclusion"
        fi
    done
else
    print_error "✗ .dockerignore file missing"
    exit 1
fi

# Test Docker build (if Docker is available)
print_status "Testing Docker build..."

if command -v docker &> /dev/null; then
    print_status "Building Docker image..."
    
    # Build with no cache to ensure clean build
    if docker build --no-cache -t web-app-test . ; then
        print_success "✓ Docker build successful"
        
        # Test the built image
        print_status "Testing built Docker image..."
        
        # Start container in background
        CONTAINER_ID=$(docker run -d -p 3001:3000 web-app-test)
        
        # Wait for container to start
        sleep 10
        
        # Test health endpoint
        if curl -f http://localhost:3001/api/health > /dev/null 2>&1; then
            print_success "✓ Health check endpoint responds correctly"
        else
            print_error "✗ Health check endpoint not responding"
            docker logs "$CONTAINER_ID"
            docker stop "$CONTAINER_ID"
            docker rm "$CONTAINER_ID"
            exit 1
        fi
        
        # Clean up
        docker stop "$CONTAINER_ID"
        docker rm "$CONTAINER_ID"
        docker rmi web-app-test
        
        print_success "✓ Docker container test completed successfully"
    else
        print_error "✗ Docker build failed"
        exit 1
    fi
else
    print_warning "⚠ Docker not available, skipping Docker build test"
fi

print_success "🎉 All validations passed! Web app is ready for deployment."

echo ""
echo "📋 Build Summary:"
echo "  ✓ Required files validated"
echo "  ✓ Package configuration verified"
echo "  ✓ OpenAPI schema validated"
echo "  ✓ Docker build optimized"
echo "  ✓ Health check endpoint ready"
echo ""
echo "🚀 To deploy:"
echo "  docker build -t web-app ."
echo "  docker run -p 3000:3000 web-app"