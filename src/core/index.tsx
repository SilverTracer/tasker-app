import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/app';

import Store from './store';

const Wrapper: React.FC = () => {
  return (
    <Store>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Store>
  );
};

export default Wrapper;
