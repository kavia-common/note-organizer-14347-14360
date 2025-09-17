export const Colors = {
  primary: '#2563EB', // blue-600
  secondary: '#F59E0B', // amber-500
  success: '#F59E0B',
  error: '#EF4444',
  background: '#f9fafb',
  surface: '#ffffff',
  text: '#111827',
  textMuted: '#6B7280',
  border: '#E5E7EB',
  shadow: 'rgba(17, 24, 39, 0.08)',
};

export const Gradients = {
  header: ['#2563EB1A', '#f9fafb'],
  card: ['#2563EB0F', '#ffffff'],
};

export const Radii = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
  round: 999,
};

export const Spacing = {
  xs: 6,
  sm: 10,
  md: 14,
  lg: 18,
  xl: 24,
  xxl: 32,
};

export const Elevation = {
  sm: {
    shadowColor: Colors.shadow,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 2,
  },
  md: {
    shadowColor: Colors.shadow,
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
    elevation: 4,
  },
};
