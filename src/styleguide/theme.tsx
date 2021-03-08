import CSS from 'csstype';
import { Theme } from './index.d';

export enum breakpoints {
  MOBILE = '324px',
  MOBILE_LARGE = '424px',
  TABLET = '767px',
  DESKTOP = '1023px'
}

export enum colors {
  BLUE = '#016aff',
  DARK_ORANGE = '#ff5004',
  DARK_GRAY = 'rgb(44, 44, 44)',
  WHITE = '#fefefe',
  LIGHT_GRAY = '#efefef'
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
    primary: colors.BLUE,
    secondary: colors.DARK_ORANGE,
    heading: colors.DARK_GRAY,
    background: colors.WHITE,
    text: colors.DARK_GRAY,
    lightGray: colors.LIGHT_GRAY,
    chatMessage: {
      user: {
        text: '#3375d4',
        bg: '#f1f7ff'
      },
      default: {
        text: '#615e61',
        bg: '#f8f8f7'
      }
    }
  },
  // Major third
  fontSizes: {
    small: '0.8rem',
    default: '1rem',
    medium: '1.25rem',
    large: '1.563rem',
    xlarge: '1.953rem'
  },
  chatScreen: {
    borderRadius: '10px'
  }
};
