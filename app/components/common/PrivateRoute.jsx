import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

// TODO: Remove.
var isAuthenticated = false;

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => {
    console.log('===========', rest, props);
    return (
      isAuthenticated === true
        ? <Component {...props} />
        : <Redirect to={{
          pathname: '/login',
          state: { from: props.location }
        }} />
    );
  }} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object
};

export default PrivateRoute;
