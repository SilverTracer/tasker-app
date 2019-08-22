/* eslint-disable react/no-unused-state */
import React from 'react';
// import PropTypes from 'prop-types';
// import jwt_decode from 'jwt-decode';
// import auth0 from 'auth0-js';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: null,
      reg: null,
    };

    this.authorizeUser = this.authorizeUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }

  authorizeUser() {
    fetch('http://localhost:8080/signin', {
      method: 'GET',
    })
      .then(res => res.text())
      .then(text => this.setState({ auth: text }));
  }

  registerUser() {
    fetch('http://localhost:8080/signup', {
      method: 'GET',
    })
      .then(res => res.text())
      .then(text => this.setState({ auth: text }));
  }

  render() {
    const { authorizeUser, registerUser } = this;
    return (
      <div>
        <div>
          <h3>Authorize user</h3>
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your email" />
          <button type="button" onClick={authorizeUser}>Auth</button>
        </div>
        <div>
          <h3>Register user</h3>
          <input type="text" placeholder="Enter your first name" />
          <input type="text" placeholder="Enter your last name" />
          <input type="text" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your email" />
          <button type="button" onClick={registerUser}>Auth</button>
        </div>
      </div>
    );
  }
}

export default Auth;
