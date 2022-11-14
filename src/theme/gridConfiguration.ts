import { setConfiguration } from 'react-grid-system';
import {
  breakpoints
} from 'theme/theme';

setConfiguration({
  gridColumns: 12,
  gutterWidth: 8, // NOTE: this might change in higher resolutions (Context API solution)
  breakpoints: [
    breakpoints.tablet,
    breakpoints.bigTablet,
    breakpoints.smallDesktop,
    breakpoints.desktop,
    breakpoints.fullWidth,
  ],
  containerWidths: [
    0,
    breakpoints.tablet,
    breakpoints.tablet,
    breakpoints.tablet,
    breakpoints.tablet,
  ],
});
