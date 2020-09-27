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
      size: string;
      primary: string;
      secondary: string;
      inverted: string;
    };
    highlight: {
      primary: string;
      secondary: string;
      inverted: string;
    };
    button: {
      text: {
        color: string;
        hover: string;
        active: string;
      };
      background: {
        color: string;
        hover: string;
        active: string;
      };
    };
  }
}
