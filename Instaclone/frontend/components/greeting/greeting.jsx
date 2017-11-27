import React from 'react';
import { Link } from 'react-router-dom';

// const sessionLinks = () => (
//   <nav className="login-signup">
//     <Link to="/login"><button>Login </button></Link>
//     &nbsp;or&nbsp;
//     <Link to="/signup"><button>Sign up</button></Link>
//   </nav>
// );

const personalGreeting = (currentUser, logout) => {
  return (
    <hgroup className="header-group">
      <div className="nav-logos">
        <div className="nav-logo-group">
          <Link to="/posts"><div className="logo"><i className="fa fa-instagram" aria-hidden="true"></i></div></Link>
          <Link to="/posts"><div id="nav-name">Shinstagram</div></Link>
        </div>
        <div className="nav-search-bar">
          <div className="search-logo"><i className="fa fa-search"></i></div>
          <label>
            <input type="text"
              placeholder=""
              className="nav-search-input"
              />
          </label>
        </div>
        <div className="nav-button-group">
          <Link to={"/upload"}><span><i className="fa fa-plus" aria-hidden="true"></i></span></Link>
          <Link to={`/users/${currentUser.id}`}><span><i className="fa fa-user-o" aria-hidden="true"></i></span></Link>
          <span><i className="fa fa-sign-out" onClick={logout} aria-hidden="true"></i></span>
        </div>
      </div>
    </hgroup>

  );
};
//   <h2 className="header-name">Hi, {currentUser.username}!</h2>
//   <button className="header-button" onClick={logout}>Log Out</button>

const Greeting = ({ currentUser, logout }) => (
  // {
  // if (currentUser) {
  //   return personalGreeting(currentUser, logout);
  // }
// }
  currentUser ? personalGreeting(currentUser, logout) : null
  // sessionLinks()
);
// onClick={() => linkToProfile(currentUser.id)}
export default Greeting;

// .then(() => this.props.history.push('/login'))
