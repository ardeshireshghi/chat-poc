import CSS from 'csstype';

export interface Theme {
  space: {
    NONE: string;
    XS: string;
    S: string;
    M: string;
    L: string;
    XL: string;
  };
  breakpoints: string[];
  colors: { [name: string]: CSS.Property.Color };
  fontSizes: { [name: string]: CSS.Property.FontSize };
}
