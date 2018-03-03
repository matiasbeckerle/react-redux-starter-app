import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../../actions/authActions';
import LoginForm from './LoginForm';

export class LoginPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(username, password) {
    this.props.actions.login(username, password);
  }

  render() {
    return (
      <section>
        <h1>Login</h1>
        <LoginForm onSubmit={this.handleOnSubmit} />
      </section>
    );
  }
}

LoginPage.propTypes = {
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    state // TODO
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
