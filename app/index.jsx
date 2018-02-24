import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import App from './components/App';
import store, { history } from './store';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Route path="/" component={App}></Route>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>, document.getElementById('app'));
