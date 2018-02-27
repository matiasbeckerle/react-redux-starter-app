import React from 'react';
import PropTypes from 'prop-types';
import Input from '../../common/form/Input';

class LoginForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: ''
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <Input
          onChange={this.handleOnChange}
          name="username"
          placeholder="Username or email address"
          value={this.state.username} />
        <Input
          onChange={this.handleOnChange}
          type="password"
          name="password"
          placeholder="Password"
          value={this.state.password} />
        <Input
          type="submit"
          value="Login" />
      </form>
    );
  }
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
