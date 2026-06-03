// Responsive breakpoints
export const BREAKPOINTS = {
  mobile: 320,
  mobileLarge: 480,
  tablet: 768,
  desktop: 1024,
  desktopLarge: 1440,
} as const;

export const MEDIA_QUERIES = {
  mobile: `@media (max-width: ${BREAKPOINTS.mobileLarge - 1}px)`,
  tablet: `@media (min-width: ${BREAKPOINTS.mobileLarge}px) and (max-width: ${BREAKPOINTS.desktop - 1}px)`,
  desktop: `@media (min-width: ${BREAKPOINTS.desktop}px)`,
} as const;
