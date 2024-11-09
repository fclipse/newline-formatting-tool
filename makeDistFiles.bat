@echo off
echo Building dist folder files...
npx tailwindcss -i ./src/style.css -o ./src/output.css --minify
if %errorlevel% neq 0 (
    echo Tailwind CSS build failed.
    exit /b %errorlevel%
) else (
    echo Tailwind CSS build successful.
    echo Copying files to dist folder...
    xcopy index.html dist\ /Y
    xcopy src\main.js dist\src\ /Y
    xcopy src\output.css dist\src\ /Y
    echo Files copied successfully.
    echo Press any key to continue...
    pause
)