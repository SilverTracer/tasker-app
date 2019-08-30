import jwt from 'jwt-decode';

import * as TYPES from './types';

const token : string | null = localStorage.getItem('token');
const user : TYPES.IUser = {
  token: '',
  created_at: null,
  username: '',
  email: '',
};

if (token) {
  const data : any = jwt<any>(token).data;

  user.created_at = data.created_at;
  user.username = data.username;
  user.email = data.email;
  user.token = token;
}

const initialState : TYPES.IUser = {
  token: '',
  isFetching: false,
  created_at: null,
  username: '',
  email: '',
};

export default (
  state: TYPES.IUser = { ...initialState, ...user },
  action: TYPES.UserActionTypes,
) : TYPES.IUser => {
  switch (action.type) {
    case TYPES.USER_AUTH_REQUEST:
    case TYPES.USER_REG_REQUEST: {
      return {
        ...state,
        isFetching: true,
      };
    } case TYPES.USER_SET: {
      return {
        ...state,
        ...action.payload,
        isFetching: false,
      };
    } case TYPES.LOGOUT: {
      localStorage.removeItem('token');

      return {
        ...initialState,
      };
    } default: return state;
  }
};
