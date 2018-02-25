import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import HomePage from './pages/home/HomePage';

class Main extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/login" component={LoginPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    );
  }
}

export default Main;
