import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>What's happening</h1>, root);
  console.log("in doc ready");
  window.login = login;
  window.logout = logout;
  window.signup = signup;
});
