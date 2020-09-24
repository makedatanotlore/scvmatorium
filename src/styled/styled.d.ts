import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    faded: string;
    background: {
      primary: string;
      secondary: string;
      inverted: string;
    };
    text: {
      primary: string;
      secondary: string;
      inverted: string;
    };
    highlight: {
      primary: string;
      secondary: string;
      inverted: string;
    };
  }
}
