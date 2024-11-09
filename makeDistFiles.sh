#!/bin/bash
mkdir -p dist/src
echo Building dist folder files...
npx tailwindcss -i ./src/style.css -o ./src/output.css --minify
echo Copying files to dist folder...
cp index.html dist/
cp src/main.js dist/src/
cp src/output.css dist/src/
echo "Files copied successfully."
echo Press any key to continue...