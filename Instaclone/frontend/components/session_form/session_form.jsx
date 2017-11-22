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
    if (this.props.formType === 'login') {
      return <Link to="/signup" className="login-form-button">Sign up</Link>;
      } else {
        return <Link to="/login"className="login-form-button">Log in</Link>;
    }
  }


  render() {
    if (this.props.formType === 'signup'){
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-blurb">
          Sign up to see photos and videos from your friends
          <br/>
          <button className="login-form-button">Log in Demo User</button>

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
        </form>
        <div className="login-form-secondary">Have an account? &nbsp;
          <span className="login-form-alt-link">{this.navLink()}</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-blurb">
          <button className="login-form-button">Log in Demo User</button>

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
            <input className="login-form-button" type="submit" value="Log In" />
          </div>
        <div className="login-form-errors">{this.renderErrors()}</div>
        </form>
        <div className="login-form-secondary">Don't have an account? &nbsp;
          <span className="login-form-alt-link">{this.navLink()}</span>
        </div>
      </div>
    );
  }
  }
}
// <div className="login-form-box"> {this.props.formType} </div>
// or {this.navLink()}

export default withRouter(SessionForm);
