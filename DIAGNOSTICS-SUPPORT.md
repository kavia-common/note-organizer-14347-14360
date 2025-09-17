# Diagnostics & Support

If CI reports:
  ./gradlew: No such file or directory

Checklist
1) Working directory
   - Ensure the command runs at repository root.
   - Run: pwd; ls -la

2) Permissions
   - Run: bash note-organizer-14347-14360/set-exec-gradle.sh
   - Then re-try: ./gradlew check

3) Wrapper JAR
   - If wrapper JAR is missing, run:
     - sh note-organizer-14347-14360/bootstrap-gradle-wrapper.sh
     - ./gradlew help

4) One-step bootstrap + check
   - bash note-organizer-14347-14360/ci-gradle-check.sh

5) Alternate verification path (no Gradle)
   - bash note-organizer-14347-14360/build-web.sh

Quick diagnostics
- Run: bash note-organizer-14347-14360/gradle-diagnostics.sh

If issues persist
- Confirm network access for downloading Gradle distribution (curl/unzip present).
- Ensure Node/npm available for Expo Prebuild if building native.
