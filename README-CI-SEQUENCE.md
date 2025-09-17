For CI systems that always call ./gradlew at the repository root:

Recommended sequence:
1) bash ./prepare-android-wrapper.sh
2) bash ./gradlew-root.sh :app:assembleDebug
   -or- bash ./gradlew-ci.sh :app:assembleDebug
   -or- bash ./build-android.sh

If your CI cannot change commands, ensure it executes a pre-step:
- bash ./prepare-android-wrapper.sh
Then ./gradlew (shim) will forward correctly.
