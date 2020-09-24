import themesJSON from './themes.json';
import { Theme, Themes } from 'types/themes';

export const defaultTheme: Theme = themesJSON.default;

export const themes: Themes = {
  ...themesJSON,
};
