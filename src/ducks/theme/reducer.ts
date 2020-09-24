import { DefaultTheme } from 'styled-components';
import { defaultTheme } from 'themes';

const initialState = defaultTheme;

export const reducer = (state: DefaultTheme = initialState, action: any) => {
  switch (action.type) {
    default:
      return state;
  }
};
