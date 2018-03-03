import * as types from '../constants/actionTypes';
import initialState from './initialState';

function auth(state = initialState.auth, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return Object.assign({}, state,
        {
          authenticating: true,
          error: false,
          errorMessage: null
        }
      );

    case types.LOGIN_SUCCESS:
      return Object.assign({}, state,
        {
          authenticating: false,
          error: false,
          errorMessage: null,
          user: action.user
        }
      );

    case types.LOGIN_ERROR:
      return Object.assign({}, state,
        {
          authenticating: false,
          error: true,
          errorMessage: action.message
        }
      );

    default:
      return state;
  }
}

export default auth;
