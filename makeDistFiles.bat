@echo off
echo Building dist folder files...
npx tailwindcss -i ./src/style.css -o ./src/output.css --minify
echo Copying files to dist folder...
xcopy index.html dist\ /Y
xcopy src\main.js dist\src\ /Y
xcopy src\output.css dist\src\ /Y
echo Files copied successfully.
echo Press any key to continue...
pause