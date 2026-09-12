@echo off
title Push Diogenes Watch to GitHub
echo ============================================================
echo   Pushing Diogenes Watch to:
echo   https://github.com/abhinandsasikumar4246-svg/useless_project_devd
echo ============================================================
echo.

:: Ensure MinGit is in PATH if standard git is not found
where git >nul 2>&1
if %ERRORLEVEL% neq 0 (
    set "PATH=%PATH%;%LOCALAPPDATA%\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\cmd;%LOCALAPPDATA%\Microsoft\WinGet\Packages\Git.MinGit_Microsoft.Winget.Source_8wekyb3d8bbwe\bin"
)

git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo ============================================================
    echo   SUCCESS! Code pushed to GitHub successfully.
    echo   Check your repo:
    echo   https://github.com/abhinandsasikumar4246-svg/useless_project_devd
    echo ============================================================
) else (
    echo ============================================================
    echo   If GitHub authentication is needed:
    echo   1. A browser window or popup may open.
    echo   2. Click "Sign in with your browser" to authenticate.
    echo ============================================================
)
pause
