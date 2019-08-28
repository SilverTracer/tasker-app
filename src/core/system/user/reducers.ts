import * as TYPES from './types';

const initialState : TYPES.IUser = {
  token: '',
  created_at: null,
  username: '',
  email: '',
  isFetching: false,
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
