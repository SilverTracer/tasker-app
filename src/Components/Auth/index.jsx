/* eslint-disable no-return-assign */
import React from 'react';
import jwt from 'jwt-decode';

class Auth extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      json: null,
      token: null,
      user: null,
    };

    this.authorizeUser = this.authorizeUser.bind(this);
    this.registerUser = this.registerUser.bind(this);
    this.testSend = this.testSend.bind(this);
  }

  authorizeUser() {
    const { authMail, authPass } = this;
    fetch(`${process.env.API_URL}/auth/signin`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: authMail.value,
        password: authPass.value,
      }),
    }).then(res => (
      res.json()
    )).then((json) => {
      this.setState({
        token: json.token,
        user: jwt(json.token).data,
      });
    });
  }

  registerUser() {
    const {
      regName,
      regMail,
      regPass,
    } = this;

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: regName.value,
        email: regMail.value,
        password: regPass.value,
      }),
    };
    fetch(`${process.env.API_URL}/auth/signup`, options)
      .then(res => res.json())
      .then((json) => {
        this.setState({
          token: json.token,
          user: jwt(json.token).data,
        });
      });
  }

  testSend() {
    const { token } = this.state;
    fetch(`${process.env.API_URL}/api/test`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(json => this.setState({ json }));
  }

  render() {
    const { authorizeUser, registerUser, testSend } = this;
    const { json, user } = this.state;
    return (
      <div>
        <h2>
          Hello,
          {user ? user.email : ' user'}
        </h2>
        <div>
          <h3>Authorize user</h3>
          <input type="text" ref={e => this.authMail = e} placeholder="Enter your email" />
          <input type="password" ref={e => this.authPass = e} placeholder="Enter your email" />
          <button type="button" onClick={authorizeUser}>Auth</button>
        </div>
        <div>
          <h3>Register user</h3>
          <input type="text" ref={e => this.regName = e} placeholder="Enter your first name" />
          <input type="text" ref={e => this.regMail = e} placeholder="Enter your email" />
          <input type="password" ref={e => this.regPass = e} placeholder="Enter your password" />
          <button type="button" onClick={registerUser}>Auth</button>
        </div>
        <div>
          <h3>Test</h3>
          <p>Response:</p>
          {json && (
            <p>{JSON.stringify(json)}</p>
          )}
          <button type="button" onClick={testSend}>Test call</button>
        </div>
      </div>
    );
  }
}

export default Auth;
