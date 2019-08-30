import * as React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import Auth from '../containers/auth';

import { store } from './store';

interface IState {
  auth: boolean;
  subscription: any;
}

class Application extends React.Component<any, IState> {
  constructor(props: any) {
    super(props);

    this.state = {
      auth: Boolean(store.getState().user.token),
      subscription: null,
    };

    this.authHandler = this.authHandler.bind(this);
  }

  componentDidMount() {
    this.authHandler();
  }

  authHandler() {
    const subscription = store.subscribe(() => {
      const current = store.getState().user.token;

      if (Boolean(current) !== this.state.auth) {
        this.setState({ auth: Boolean(current) });
      }
    });

    this.setState({
      subscription,
    });
  }

  componentWillUnmount() {
    this.state.subscription && this.state.subscription();
  }

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImNyZWF0ZWRfYXQiOiIyMDE5LTA4LTI2VDEyOjE3OjQ4LjEyN1oiLCJfaWQiOiI1ZDYzY2RlZjVhYmJkZDcyNjFlYzEzMzkiLCJ1c2VybmFtZSI6InVzZXIiLCJlbWFpbCI6Im1hQGlsLnJ1Iiwic2FsdCI6IjAuNzk2OTIxOTA2MzczNzQ3NiIsImhhc2hlZFBhc3N3b3JkIjoiYWY3ZGYxMWNhNjRkNGY2MTIwYzBiYzhhNjFkZDExMTc0YzAxMmY0NiIsIl9fdiI6MH0sImV4cCI6MTU2NzAxMzMyNCwiaWF0IjoxNTY3MDA5NzI0fQ.oylt0nRZYIkZE9EQWKDfRMcn5a4OkzXs0gNxAMLjCJY

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
