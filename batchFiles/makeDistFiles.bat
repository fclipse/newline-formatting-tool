@echo off
echo ========== 2. Copying files to dist/ ==========
xcopy index.html dist\ /Y
xcopy favicon.ico dist\ /Y
xcopy og-image.png dist\ /Y
xcopy sitemap.xml dist\ /Y
xcopy robots.txt dist\ /Y
xcopy src\main.js dist\src\ /Y
xcopy src\output.css dist\src\ /Y
echo ========== Files copied successfully ==========
echo === Ready to deploy. (push files to GITHUB) ===
