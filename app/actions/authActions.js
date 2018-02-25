import * as types from '../constants/actionTypes';

export function login(username, password) {
  return {
    type: types.LOGIN,
    username,
    password
  };
}
