# Design Decisions

Why AsyncStorage only?
- Scope requires local-only persistence; keeps app simple and fully offline.
- Future backends can be integrated behind services without changing UI.

Why minimal Router (no React Navigation)?
- Small app scope; avoids extra dependency weight.
- Can migrate to React Navigation later if deep linking becomes essential.

Why Ocean Professional tokens directly (no theme provider)?
- Simplicity and performance: read tokens directly from src/theme/colors.ts.
- A provider can be added later for theme switching.

Why subtle, dependency-free gradients?
- Ocean look without extra packages; see OceanBackground component.

Why lightweight Markdown/animations?
- Minimize dependencies and keep performance snappy; helpers are intentionally minimal.

Why folder-first filter then query?
- Predictable UX: scoping reduces result set and improves perceived performance.
