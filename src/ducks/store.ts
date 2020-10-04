import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as appReducer } from 'ducks/reducer';
import { reducer as themeReducer } from 'ducks/theme/reducer';
import { reducer as characterReducer } from 'ducks/character/reducer';
import { reducer as filterReducer } from 'ducks/filter/reducer';
import { intlReducer } from 'react-intl-redux';
import { defaultLocale } from 'translations';
import { defaultTheme } from 'themes';

const initialState = {
  intl: defaultLocale,
  theme: defaultTheme,
};

const reducers = combineReducers({
  app: appReducer,
  intl: intlReducer,
  theme: themeReducer,
  character: characterReducer,
  filter: filterReducer,
});

export const store = createStore(reducers, initialState, composeWithDevTools());
