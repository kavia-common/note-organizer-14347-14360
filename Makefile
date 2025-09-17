# Make targets to help CI environments that rely on make conventions.

.PHONY: help
help:
	@echo "Targets:"
	@echo "  make check        - Run Gradle :app:check via Expo prebuild"
	@echo "  make assemble     - Run Gradle :app:assembleDebug via Expo prebuild"

.PHONY: check
check:
	sh ./gradle-preflight.sh :app:check

.PHONY: assemble
assemble:
	sh ./gradle-preflight.sh :app:assembleDebug
