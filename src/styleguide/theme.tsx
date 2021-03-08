import CSS from 'csstype';
import { Theme } from './index.d';

enum breakpoints {
  MOBILE = '324px',
  MOBILE_LARGE = '424px',
  TABLET = '767px',
  DESKTOP = '1023px'
}

type DefaultTheme =
  | Theme
  | {
      [componentName: string]: CSS.Properties;
    };

export const defaultTheme: DefaultTheme = {
  space: {
    NONE: '0',
    XS: '0.25rem',
    S: '0.5rem',
    M: '1rem',
    L: '1.5rem',
    XL: '3rem'
  },
  colors: {
    primary: 'green',
    secondary: 'blue',
    heading: 'rgb(44, 44, 44)',
    background: 'white',
    text: '#333'
  },
  // Major third
  fontSizes: {
    small: '0.8rem',
    default: '1rem',
    medium: '1.25rem',
    large: '1.563rem',
    xlarge: '1.953rem'
  },
  breakpoints: [
    breakpoints.MOBILE,
    breakpoints.MOBILE_LARGE,
    breakpoints.TABLET,
    breakpoints.DESKTOP
  ],
  chatScreen: {
    borderRadius: '10px'
  }
};
