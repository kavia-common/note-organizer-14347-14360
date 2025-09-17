# CI via npm (Fallback)

If your CI can only execute npm scripts from the repository root, use:

- npm run ci:gradle:check
- npm run ci:gradle:assemble

These map to the preflight wrapper and avoid calling a missing `./gradlew` at the root.
