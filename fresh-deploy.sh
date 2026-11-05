#!/usr/bin/env bash
# =====================================================================
# Fresh deploy for trilogy-crew on VPS.
# Use when the existing /var/www/trilogy-crew is broken or missing.
#
# Prereqs:
#   - A zip "trilogy-crew.zip" uploaded to /tmp/trilogy-crew.zip
#   - Run as root (or with sudo)
#
# Usage:
#   cd /tmp
#   unzip -o trilogy-crew.zip   # only to get THIS script out
#   bash /tmp/trilogy-crew/fresh-deploy.sh
# =====================================================================
set -euo pipefail

ZIP_PATH=/tmp/trilogy-crew.zip
TARGET_DIR=/var/www/trilogy-crew
BACKUP_DIR=/var/www/trilogy-crew.OLD-$(date +%Y%m%d-%H%M%S)

if [ ! -f "$ZIP_PATH" ]; then
  echo "ERROR: $ZIP_PATH no existe. Subí el zip a /tmp/ primero."
  exit 1
fi

echo ">>> 1. Backing up existing site (if any) to $BACKUP_DIR"
if [ -d "$TARGET_DIR" ]; then
  mv "$TARGET_DIR" "$BACKUP_DIR"
  echo "    Backup hecho."
else
  echo "    No había sitio previo."
fi

echo ">>> 2. Extracting fresh zip"
cd /tmp
rm -rf /tmp/_trilogy_extract
mkdir /tmp/_trilogy_extract
cd /tmp/_trilogy_extract
unzip -q "$ZIP_PATH"
mv trilogy-crew "$TARGET_DIR"
cd /

echo ">>> 3. Sanity check on package.json"
head -1 "$TARGET_DIR/package.json"
if ! head -1 "$TARGET_DIR/package.json" | grep -q "^{"; then
  echo "ERROR: package.json no es JSON válido. Zip corrupto."
  exit 1
fi

echo ">>> 4. Installing dependencies (may take 1-2 min)"
cd "$TARGET_DIR"
npm install

echo ">>> 5. Building production bundle"
npm run build

echo ">>> 6. Setting permissions"
chown -R www-data:www-data "$TARGET_DIR/dist" 2>/dev/null || true
chmod -R 755 "$TARGET_DIR/dist"

echo ">>> 7. Reloading nginx"
systemctl reload nginx

echo ""
echo "=============================================="
echo "✓  DEPLOY COMPLETE"
echo "   Site: https://trilogycrew.com"
echo "   Backup of old site: $BACKUP_DIR"
echo "=============================================="
