import jwt from 'jwt-decode';

import * as TYPES from './types';

const token = localStorage.getItem('token');
const user : TYPES.IUser = {
  created_at: null,
  username: '',
  email: '',
};

if (token) {
  const data : any = jwt(token);

  console.log(data);

  user.created_at = data.created_at;
  user.username = data.username;
  user.email = data.email;
}

const initialState : TYPES.IUser = {
  token: token || '',
  isFetching: false,
  ...user,
};

export default (
  state: TYPES.IUser = initialState,
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
        ...action.payload,
        isFetching: false,
      };
    } default: return state;
  }
};
