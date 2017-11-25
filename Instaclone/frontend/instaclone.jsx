import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPosts, fetchUserPosts } from './actions/posts_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: {currentUser: window.currentUser}};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  const root = document.getElementById('root');
  // console.log("in doc ready");
  window.login = login;
  window.logout = logout;
  window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchPosts = fetchPosts;
  window.fetchUserPosts = fetchUserPosts;
  ReactDOM.render(<Root store={ store }/>, root);

});
