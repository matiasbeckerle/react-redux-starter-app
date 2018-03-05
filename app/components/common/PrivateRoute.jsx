import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ user, component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    user && user.name != null // TODO: Perform a better evaluation.
      ? <Component {...props} />
      : <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.func,
  location: PropTypes.object,
  user: PropTypes.object
};

export default PrivateRoute;
