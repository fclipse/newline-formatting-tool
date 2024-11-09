@echo off
echo ========== 1. Minifying src/style.css ==========
npx tailwindcss -i ./src/style.css -o ./src/output.css --minify