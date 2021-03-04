import { Theme } from './index.d';

enum breakpoints {
  MOBILE = '324px',
  MOBILE_LARGE = '424px',
  TABLET = '767px',
  DESKTOP = '1023px'
}

export const defaultTheme: Theme = {
  space: {
    NONE: 0,
    XS: 4,
    S: 8,
    M: 16,
    L: 24,
    XL: 48
  },
  colors: {
    primary: 'green',
    secondary: 'blue',
    heading: 'white',
    text: '#333'
  },
  breakpoints: [
    breakpoints.MOBILE,
    breakpoints.MOBILE_LARGE,
    breakpoints.TABLET,
    breakpoints.DESKTOP
  ]
};
