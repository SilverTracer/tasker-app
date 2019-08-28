import { Reducer, combineReducers, createStore } from 'redux';

import * as USER from '../system/user';

export interface IAppState {
  user: USER.TYPES.IUser;
}

export const rootReducer: Reducer<IAppState> =
  combineReducers<IAppState>({
    user: USER.REDUCERS,
  });

export const store = createStore(
  rootReducer,
);
