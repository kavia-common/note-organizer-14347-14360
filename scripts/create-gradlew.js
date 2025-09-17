#!/usr/bin/env node
/**
 * Creates a POSIX ./gradlew wrapper that forwards to gradle.sh with LF endings.
 * Ensures executable bit is set. Safe to run multiple times.
 */
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const gradlewPath = path.join(root, 'gradlew');
const gradleShPath = path.join(root, 'gradle.sh');

const content = `#!/usr/bin/env sh
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$DIR"
exec sh ./gradle.sh "$@"
`;

try {
  if (!fs.existsSync(gradleShPath)) {
    // create a minimal gradle.sh fallback that calls ci-runner
    const gradleShContent = `#!/usr/bin/env sh
set -eu
DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
cd "$DIR"
if [ -f "./ci-gradle-runner.sh" ]; then
  exec ./ci-gradle-runner.sh "$@"
fi
echo "[gradle.sh] ci-gradle-runner.sh missing; try: sh ./run-gradle-direct.sh :app:assembleDebug"
exit 1
`;
    fs.writeFileSync(gradleShPath, gradleShContent.replace(/\r\n/g, '\n'), { mode: 0o755 });
  }

  fs.writeFileSync(gradlewPath, content.replace(/\r\n/g, '\n'), { mode: 0o755 });
  console.log('[create-gradlew.js] Created ./gradlew wrapper and ensured ./gradle.sh presence');
} catch (e) {
  console.error('[create-gradlew.js] Failed to create gradle wrapper:', e);
  process.exit(0); // Do not fail CI if this optional step fails
}
