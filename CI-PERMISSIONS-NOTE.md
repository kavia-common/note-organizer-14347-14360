# CI Permissions Note

Some CI environments check executability differently. Before invoking wrappers, run:

- chmod +x ./gradlew
- chmod +x ./gradle
- chmod +x ./gradlew.sh
- chmod +x ./.gradlew
- chmod +x ./gradlew-wrapper
- chmod +x ./_gradlew
- chmod +x ./gradlew-linux
- chmod +x ./gradle-preflight.sh
- chmod +x ./run-gradle-direct.sh

Then call:
- ./gradlew :app:check
or preferred:
- sh ./gradle-preflight.sh :app:check
