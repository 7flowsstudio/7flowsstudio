#!/bin/bash

# 7Flows Studio Landing Page Test Runner
# Usage: ./tests/run-tests.sh [locale] [browser]

set -e

LOCALE=${1:-uk}
BROWSER=${2:-chromium}

echo "🚀 Running 7Flows Studio landing page tests"
echo "📍 Locale: $LOCALE"
echo "🌐 Browser: $BROWSER"
echo ""

# Check if dev server is running
if ! curl -s http://localhost:3000 > /dev/null; then
    echo "⚠️  Dev server not running. Starting..."
    npm run dev &
    DEV_PID=$!
    sleep 5
fi

# Run tests
echo "🧪 Starting Playwright tests..."
if [ "$BROWSER" = "all" ]; then
    npx playwright test landing.spec.ts
else
    npx playwright test landing.spec.ts --project="$BROWSER"
fi

# Cleanup
if [ ! -z "$DEV_PID" ]; then
    echo "🧹 Stopping dev server..."
    kill $DEV_PID 2>/dev/null || true
fi

echo "✅ Tests completed!"
