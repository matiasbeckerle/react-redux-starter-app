import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import store, { history } from './store';
import App from './components/App';

render(
  <AppContainer>
    <App store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(
      <AppContainer>
        <NewApp store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
