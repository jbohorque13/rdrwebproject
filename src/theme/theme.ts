export const breakpoints = {
  mobile: 0, // 0 to 767
  tablet: 768, // 768 to 1023
  bigTablet: 1024, // 1024 to 1139
  smallDesktop: 1140, // 1140 to 1439
  desktop: 1440, // 1440 to 1919
  fullWidth: 1920, // 1920 and above
};

export const colors = {
  black: '#000000',
  lightGrey: '#8A8A8A',
  lightGrey2: '#EEEEEE',
  grey: '#252525',
  darkGrey: '#3C3C3C',
  grey2: '#8F8F8F',
  grey3: '#303030',
  grey4: '#979797',
  grey5: '#F0F0F0',
  hamiltonGreen: '#9CE95F',
  darkHamiltonGreen: '#78B249',
  leclercRed: '#E25B5B',
  darkLeclercRed: '#B04646',
  ricciardoYellow: '#FED94B',
  darkRicciardoYellow: '#CCAE3C',
  darkRicciardoYellow2: '#F1C30B',
  pumpkin: '#FD7614',
  safron: '#E3BB23',
  white: '#FFFFFF',
  // hover is for hover style (re-use the name)
  hover: { },
  // alpha is for rgba
  alpha: {
    black200: 'rgba(0, 0, 0, 0.2)',
    black600: 'rgba(0, 0, 0, 0.6)',
    darkGrey600: 'rgba(60, 60, 60, 0.6)',
    lightGrey600: '#404040',
    hamiltonGreen000: 'rgba(156, 233, 95, 0)',
    hamiltonGreen250: 'rgba(156, 233, 95, 0.25)',
    ricciardoYellow500: 'rgba(254, 217, 75, 0.5);',
    white200: 'rgba(255, 255, 255, 0.2)',
    white380: 'rgba(255, 255, 255, 0.38)',
    white500: 'rgba(255, 255, 255, 0.50)',
    white600: 'rgba(255, 255, 255, 0.60)',
    leclercRedOpacity50: 'rgba(226, 91, 91, 0.50)',
  },
};

export const gradients = {
  warm: {
    value: `linear-gradient(96.85deg, ${colors.safron} 20.4%, ${colors.pumpkin} 87.69%)`,
    fallback: colors.safron,
  },
  green: {
    value: `linear-gradient(180deg, ${colors.alpha.hamiltonGreen250} 0%, ${colors.alpha.hamiltonGreen000} 37.5%)`,
    fallback: colors.hamiltonGreen,
  },
};

export const mediaQueries = {
  maxSmallMobile: '@media screen and (max-width: 320px)',
  minMobile: `@media screen and (min-width: ${breakpoints.mobile}px)`,
  maxMobile: `@media screen and (max-width: ${breakpoints.tablet - 1}px)`,
  minTablet: `@media screen and (min-width: ${breakpoints.tablet}px)`,
  maxTablet: `@media screen and (max-width: ${breakpoints.bigTablet - 1}px)`,
  minBigTablet: `@media screen and (min-width: ${breakpoints.bigTablet}px)`,
  maxBigTablet: `@media screen and (max-width: ${breakpoints.smallDesktop - 1}px)`,
  minSmallDesktop: `@media screen and (min-width: ${breakpoints.smallDesktop}px)`,
  maxSmallDesktop: `@media screen and (max-width: ${breakpoints.desktop - 1}px)`,
  minDesktop: `@media screen and (min-width: ${breakpoints.desktop}px)`,
  maxDesktop: `@media screen and (max-width: ${breakpoints.fullWidth - 1}px)`,
  minFullwidth: `@media screen and (min-width: ${breakpoints.fullWidth}px)`,
};

export const fallbackFonts = 'Sans-Serif';

export const fontNames = {
  qanelas: `"Qanelas", ${fallbackFonts}`,
  inter: `"Inter", ${fallbackFonts}`,
  mulish: `"Mulish", ${fallbackFonts}`,
};

export const fontWeights = {
  /** thin => 300 */
  thin: 300,
  /** normal => 400 */
  normal: 400,
  /** regular => 400 */
  regular: 400,
  /* Medium => 500 */
  medium: 500,
  /** semi-bold => 600 */
  semiBold: 600,
  /** bold => 700 */
  bold: 700,
  /** extraBold => 800 */
  extraBold: 700,
};

export const pageContainerWidth = 1100;

const theme = {
  colors,
  gradients,
  breakpoints,
  mediaQueries,
  fontWeights,
  fontNames,
  pageContainerWidth
};

export default theme;
