import * as authActions from './authActions';
import * as types from '../constants/actionTypes';

describe('authActions', () => {
  it('should create an action to start a login request', () => {
    // Arrange.
    const expectedAction = {
      type: types.LOGIN_REQUEST
    };

    // Act.
    const result = authActions.loginRequest();

    // Assert.
    expect(result).toEqual(expectedAction);
  });

  it('should create an action to handle a successfully login', () => {
    // Arrange.
    const user = {
      name: 'John'
    };

    const expectedAction = {
      type: types.LOGIN_SUCCESS,
      user
    };

    // Act.
    const result = authActions.loginSuccess(user);

    // Assert.
    expect(result).toEqual(expectedAction);
  });

  it('should create an action to handle a failed login', () => {
    // Arrange.
    const message = 'Testing an error.';

    const expectedAction = {
      type: types.LOGIN_ERROR,
      message
    };

    // Act.
    const result = authActions.loginError(message);

    // Assert.
    expect(result).toEqual(expectedAction);
  });
});
