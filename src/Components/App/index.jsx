import React from 'react';
import PropTypes from 'prop-types';
import css from './main.module.css';

import Auth from '../Auth';

class App extends React.Component {
  constructor(props) {
    super(props);
    const { token } = props;
    this.state = {
      token: token || null,
    };
  }

  componentDidMount() {
    const { token } = this.state;

    if (!token) {
      console.log('Get token, pls');
    } else {
      console.log('Fetch private, pls');
    }
  }

  render() {
    return (
      <div className={css.app}>
        Hello, user!
        <div>
          <Auth />
        </div>
      </div>
    );
  }
}

App.propTypes = {
  token: PropTypes.string || null,
};

App.defaultProps = {
  token: null,
};

export default App;
