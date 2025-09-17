# Animations

Principles
- Subtle, fast, and unobtrusive
- Use sparingly: fade-in, slide-up on cards or toasts
- Respect reduced motion (future enhancement)

Helpers
- src/utils/animations.ts
  - fadeIn(duration?)
  - slideUp(duration?, distance?)

Example (Toast):
  const { style, start } = slideUp(180, 10);
  useEffect(() => { start(); }, []);
  <Animated.View style={style}>...</Animated.View>
