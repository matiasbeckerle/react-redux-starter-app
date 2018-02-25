import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/root';

export const history = createHistory();
const middleware = routerMiddleware(history);
const store = createStore(rootReducer, applyMiddleware(middleware));
if (module.hot) {
  module.hot.accept('./reducers/root', () => {
    const nextReducer = require('./reducers/root').default;
    store.replaceReducer(nextReducer);
  });
}

export default store;
