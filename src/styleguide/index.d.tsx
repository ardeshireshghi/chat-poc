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
  colors: {
    [name: string]:
      | CSS.Property.Color
      | {
          [key: string]: any;
        };
  };
  fontSizes: { [name: string]: CSS.Property.FontSize };
}
