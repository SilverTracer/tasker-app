import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from '../containers/auth';

import { store } from './store';

interface IState {
  auth: boolean;
}

class Application extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      auth: Boolean(store.getState().user.token),
    };
  }

  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route path="/" component={Auth} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Application;
