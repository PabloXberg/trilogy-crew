#!/usr/bin/env bash
# Deploy script for trilogy-crew on VPS.
# Usage: bash deploy.sh
# Exits on any error.
set -euo pipefail

cd "$(dirname "$0")"

echo ">>> Cleaning previous build artifacts..."
rm -rf node_modules dist

echo ">>> Installing dependencies..."
npm install

echo ">>> Building for production..."
npm run build

echo ">>> Reloading nginx (requires sudo)..."
sudo systemctl reload nginx

echo ""
echo "✓ Deploy done. dist/ is now live via nginx."
echo "  Visit: https://trilogycrew.com"
