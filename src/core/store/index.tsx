import * as React from 'react';
import { Reducer, combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';

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

const Store : React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default Store;
