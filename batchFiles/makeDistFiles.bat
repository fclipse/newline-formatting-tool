@echo off
echo ========== 2. Copying files to dist/ ==========
xcopy index.html dist\ /Y
xcopy src\main.js dist\src\ /Y
xcopy src\output.css dist\src\ /Y
echo ========== Files copied successfully ==========
echo === Ready to deploy. (push files to GITHUB) ===
