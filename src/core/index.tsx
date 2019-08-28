import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import App from '../components/app';

const Wrapper: React.FC = ({ children }) => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </div>
  )
}

export default Wrapper;
