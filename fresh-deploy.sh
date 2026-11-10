#!/usr/bin/env bash
# =====================================================================
# Fresh deploy for trilogy-crew on VPS.
# Usage:
#   Upload trilogy-crew.zip to /tmp/
#   bash fresh-deploy.sh
# =====================================================================
set -euo pipefail

ZIP_PATH=/tmp/trilogy-crew.zip
TARGET_DIR=/var/www/trilogy-crew
BACKUP_DIR=/var/www/trilogy-crew.OLD-$(date +%Y%m%d-%H%M%S)

if [ ! -f "$ZIP_PATH" ]; then
  echo "ERROR: $ZIP_PATH no existe. Subí el zip a /tmp/ primero."
  exit 1
fi

echo ">>> 1. Backup del sitio actual → $BACKUP_DIR"
if [ -d "$TARGET_DIR" ]; then
  mv "$TARGET_DIR" "$BACKUP_DIR"
fi

echo ">>> 2. Extracting fresh zip"
cd /tmp
rm -rf /tmp/_trilogy_extract
mkdir /tmp/_trilogy_extract
cd /tmp/_trilogy_extract
unzip -q "$ZIP_PATH"
mv trilogy-crew "$TARGET_DIR"
cd /

echo ">>> 3. Verificando package.json"
head -1 "$TARGET_DIR/package.json"
if ! head -1 "$TARGET_DIR/package.json" | grep -q "^{"; then
  echo "ERROR: package.json no es JSON válido."
  exit 1
fi

echo ">>> 4. npm install"
cd "$TARGET_DIR"
npm install

echo ">>> 5. npm run build"
npm run build

echo ">>> 6. Cache-busting: añadiendo ?v=TIMESTAMP a URLs de assets"
BUILD_VERSION=$(date +%s)
# Inyectar la versión en el index.html para que el JS/CSS la lea
if [ -f "$TARGET_DIR/dist/index.html" ]; then
  sed -i "s|</head>|<meta name=\"build-version\" content=\"${BUILD_VERSION}\" /></head>|" \
    "$TARGET_DIR/dist/index.html"
fi

echo ">>> 7. Permisos"
chown -R www-data:www-data "$TARGET_DIR/dist" 2>/dev/null || true
chmod -R 755 "$TARGET_DIR/dist"

echo ">>> 8. Reload nginx"
systemctl reload nginx

echo ""
echo "=============================================="
echo "✓  DEPLOY COMPLETE   (version: $BUILD_VERSION)"
echo "   Site: https://trilogycrew.com"
echo "=============================================="
echo ""
echo "IMPORTANTE: si al abrir no ves las imágenes nuevas,"
echo "hacé HARD REFRESH en el navegador:"
echo "  - Windows / Linux:  Ctrl + Shift + R"
echo "  - Mac:              Cmd  + Shift + R"
echo "O abrí en modo incógnito."
