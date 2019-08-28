export interface IUser {
  token?: string;
  created_at: Date | null;
  username: string;
  email: string;
  isFetching?: boolean;
}

export interface IAuthUser {
  email: string;
  password: string;
}

export interface IRegUser {
  username: string;
  email: string;
  password: string;
}

export const USER_AUTH_REQUEST = 'USER_AUTH_REQUEST';
export const USER_REG_REQUEST = 'USER_REG_REQUEST';

export const USER_SET = 'USER_SET';

interface IAuthUserAction {
  type: typeof USER_AUTH_REQUEST;
  payload: IAuthUser;
}

interface IRegUserAction {
  type: typeof USER_REG_REQUEST;
  payload: IRegUser;
}

interface ISetUserAction {
  type: typeof USER_SET;
  payload: IUser;
}

export type UserActionTypes = IAuthUserAction | IRegUserAction | ISetUserAction;
