@echo off
REM Windows-compatible shim to delegate to gradlew.sh if used on Windows environments.
bash "%~dp0gradlew.sh" %*
