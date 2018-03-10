import reducer from './auth';
import * as types from '../constants/actionTypes';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    const result = reducer(undefined, {});

    expect(result).toEqual({
      authenticating: false,
      error: false,
      errorMessage: null,
      user: null
    });
  });

  it('should handle a login request', () => {
    const result = reducer([], {
      type: types.LOGIN_REQUEST
    });

    expect(result).toEqual({
      authenticating: true,
      error: false,
      errorMessage: null
    });
  });

  it('should handle a successfully login', () => {
    const result = reducer([], {
      type: types.LOGIN_SUCCESS,
      user: {
        name: 'John'
      }
    });

    expect(result).toEqual({
      authenticating: false,
      error: false,
      errorMessage: null,
      user: {
        name: 'John'
      }
    });
  });

  it('should handle a failed login', () => {
    const result = reducer([], {
      type: types.LOGIN_ERROR,
      message: 'Unexpected error.'
    });

    expect(result).toEqual({
      authenticating: false,
      error: true,
      errorMessage: 'Unexpected error.'
    });
  });
});
