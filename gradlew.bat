@echo off
REM Root-level gradlew.bat shim for CI systems that invoke "gradlew.bat".
REM Ensures the native Android project exists via Expo prebuild, then forwards requested task(s).

setlocal ENABLEDELAYEDEXPANSION

set ROOT_DIR=%~dp0
set APP_DIR=%ROOT_DIR%notes_frontend
set ANDROID_DIR=%APP_DIR%\android

set TASK_ARGS=%*

IF NOT EXIST "%ANDROID_DIR%\gradlew" (
  echo [root-gradlew.bat] Android project not found. Running expo prebuild...
  pushd "%APP_DIR%"
  npx --yes expo prebuild --platform android
  if errorlevel 1 (
    echo [root-gradlew.bat] Prebuild failed.
    exit /b 1
  )
  popd
  echo [root-gradlew.bat] Prebuild completed.
)

pushd "%ANDROID_DIR%"
REM Ensure gradlew is executable on environments that support chmod (noop on Windows CI without chmod)
chmod +x gradlew 2>nul
echo [root-gradlew.bat] Delegating to notes_frontend/android/gradlew %TASK_ARGS%
call gradlew %TASK_ARGS%
set EXITCODE=%ERRORLEVEL%
popd

exit /b %EXITCODE%
