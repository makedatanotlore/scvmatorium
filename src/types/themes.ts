import { DefaultTheme } from 'styled-components';

export type Theme = DefaultTheme;

export type Themes = {
  [theme: string]: DefaultTheme;
};
