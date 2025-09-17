# Localization Notes

Scope
- The current app uses plain strings inline (English).
- This guide outlines how to introduce i18n without heavy refactors.

Approach
- Extract user-facing strings into a minimal key-value map (per locale).
- Provide a small `t(key)` function with fallback to English.

Guidelines
- Keep keys semantic (e.g., "notes.title", "actions.save").
- Avoid string concatenation where possible; use full phrases.
- Favor short, clear copy for mobile readability.

Next Steps (optional)
- Add locales/en.json and locales/es.json
- Implement a `useLocale()` hook reading device language or app setting
- Wrap App with a provider to supply `t` to components
