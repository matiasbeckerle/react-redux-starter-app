import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, Route } from 'react-router-dom';
import * as actions from '../actions/authActions';
import PrivateRoute from './common/PrivateRoute';
import LoginPage from './pages/login/LoginPage';
import NotFoundPage from './pages/not_found/NotFoundPage';
import HomePage from './pages/home/HomePage';

export class Main extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <Switch>
        <PrivateRoute exact path="/" component={HomePage} user={this.props.user}></PrivateRoute>
        <Route path="/login" component={LoginPage}></Route>
        <Route component={NotFoundPage}></Route>
      </Switch>
    );
  }
}

Main.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object
};

function mapStateToProps(state) {
  return {
    user: state.auth.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);
