import React from 'react';
import { Provider } from 'react-intl-redux';
import { store } from 'ducks/store';
import Main from 'views/Main';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
