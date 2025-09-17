# Reduced Motion

A small preference to lower animation intensity on low-end devices or for accessibility.

API:
- setReducedMotion(boolean)
- getReducedMotion(): Promise<boolean>

Suggested use:
- Fade/scale transitions opt-out when `getReducedMotion()` is true.
