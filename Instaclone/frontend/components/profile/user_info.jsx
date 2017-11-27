import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.fetchUser(this.props.match.params.userId);
  }
  render() {
    return(
      <div className="profile-grid user-profile-container">
        <img className="profile-img" src={this.props.user.img_url}/>
        <div className="profile-username">{this.props.user.username}</div>
    </div>
    );
  }

}

export default UserInfo;
