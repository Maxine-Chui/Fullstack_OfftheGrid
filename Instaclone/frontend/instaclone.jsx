import React from 'react';
import ReactDOM from 'react-dom';
import { login, signup, logout } from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPosts, fetchUserPosts } from './actions/posts_actions';
import { fetchPostComments, fetchAllComments, createComment, deleteComment } from './actions/comments_actions';

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
  // window.login = login;
  // window.logout = logout;
  // window.signup = signup;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.fetchPosts = fetchPosts;
  window.fetchPostComments = fetchPostComments;
  window.fetchAllComments = fetchAllComments;
  window.createComment = createComment;
  window.deleteComment = deleteComment;
  ReactDOM.render(<Root store={ store }/>, root);

});
