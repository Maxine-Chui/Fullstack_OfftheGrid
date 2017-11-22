import React from 'react';
import { Link } from 'react-router-dom';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login"><button>Login </button></Link>
    &nbsp;or&nbsp;
    <Link to="/signup"><button>Sign up</button></Link>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
  <hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  // {
  // if (currentUser) {
  //   return personalGreeting(currentUser, logout);
  // }
// }
  currentUser ? personalGreeting(currentUser, logout) : null
  // sessionLinks()
);

export default Greeting;
