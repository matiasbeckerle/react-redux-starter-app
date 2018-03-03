import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './common/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import HomePage from './pages/home/HomePage';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={HomePage}></PrivateRoute>
        <Route path="/login" component={LoginPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    );
  }
}

export default Main;
