import CSS from 'csstype';

export interface Theme {
  space: any;
  breakpoints: string[];
  colors: { [name: string]: CSS.Property.Color };
}
