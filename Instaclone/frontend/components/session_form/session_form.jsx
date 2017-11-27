import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.logInDemoUser = this.logInDemoUser.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn){
      this.props.history.push('/');
    }
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  navLink() {
    if (this.props.formType === 'login' || this.props.formType === '') {
      return <Link to="/signup" onClick={this.props.clearErrors}>Sign up</Link>;
      } else {
        return <Link to="/login" onClick={this.props.clearErrors}>Log in</Link>;
    }
  }


  logInDemoUser(e) {
    e.preventDefault();
    const demoUser = {
      username: 'user1',
      password: 'useruser1',
    };
    this.props.login(demoUser);
  }

  signUpForm() {
    return (
      <div className="login-page-container">
        <img id="login-img" src="http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511399842/Screen_Shot_2017-11-22_at_5.04.43_PM_copy_ciucwb.png"/>
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-logo">Shinstagram</div>
            <div className="login-form-blurb">Sign up to see photos and videos from your friends.</div>
            <form onSubmit={this.handleSubmit}>
              <button type="blah" className="login-form-button" onClick={this.logInDemoUser}>Log in Demo User</button>
              <div className="login-form-or"><span>OR</span></div>
              <div className="login-form">
                <br/>
                <label>
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    />
                </label>
                <br/>
                <label>
                  <input type="text"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.update('email')}
                    className="login-input"
                    />
                </label>
                <br/>
                <label>
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>
                <br/>
                <input className="login-form-button" type="submit" value="Sign Up"/>
              </div>
              <div className="login-form-errors">{this.renderErrors()}</div>

              <div className="login-terms">By signing up, you agree to our Terms & Privacy Policy</div>

            </form>
          </div>
          <div className="login-form-secondary">Have an account? &nbsp;
            <span className="login-form-alt-link">{this.navLink()}</span>
          </div>
        </div>
      </div>
    );
  }

  signInForm() {
    return(
      <div className="login-page-container">
        <img id="login-img" src="http://res.cloudinary.com/dqhhpt0sj/image/upload/v1511399842/Screen_Shot_2017-11-22_at_5.04.43_PM_copy_ciucwb.png"/>
        <div className="login-form-container">
          <div className="login-form-subcontainer">
            <div className="login-form-logo">Shinstagram</div>
            <form onSubmit={this.handleSubmit}>
              <button type="blah" className="login-form-button" onClick={this.logInDemoUser}>Log in Demo User</button>

              <div className="login-form">
                <br/>
                <label>
                  <input type="text"
                    placeholder="Username"
                    value={this.state.username}
                    onChange={this.update('username')}
                    className="login-input"
                    />
                </label>
                <br/>
                <label>
                  <input type="password"
                    placeholder="Password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    className="login-input"
                    />
                </label>
                <br/>
                <input className="login-form-button" type="submit" value="Log In"/>
              </div>
              <div className="login-form-errors">{this.renderErrors()}</div>
            </form>
          </div>
          <div className="login-form-secondary">Don't have an account? &nbsp;
            <span className="login-form-alt-link">{this.navLink()}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.formType === 'signup'){
      return this.signUpForm();
    } else {
      return this.signInForm();
    }
  }
}
// <div className="login-form-box"> {this.props.formType} </div>
// or {this.navLink()}

export default withRouter(SessionForm);
