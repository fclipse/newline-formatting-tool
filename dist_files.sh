#!/bin/bash
mkdir -p dist/src
echo Copying files to dist folder...
cp index.html dist/
cp src/main.js dist/src/
cp src/output.css dist/src/
echo "Files copied successfully."
echo Press any key to continue...