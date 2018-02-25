import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import store, { history } from './store';
import App from './components/App';
import LoginPage from './components/pages/login/LoginPage';
import NotFoundPage from './components/pages/not_found/NotFoundPage';

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={App}></Route>
          <Route path="/login" component={LoginPage}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>, document.getElementById('app'));
