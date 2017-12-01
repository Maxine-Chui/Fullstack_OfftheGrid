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
          <Link to="/posts"><div className="logo"><i className="fa fa-camera-retro" aria-hidden="true"></i></div></Link>
          <Link to="/posts"><div id="nav-name">OfftheGrid</div></Link>
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

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : null
);

export default Greeting;


// </div>
// <div className="nav-search-bar">
//   <div className="search-logo"><i className="fa fa-search"></i></div>
//   <label>
//     <input type="text"
//       placeholder=""
//       className="nav-search-input"
//       />
//   </label>
// </div>
