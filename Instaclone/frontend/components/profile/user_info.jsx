import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFollows: this.props.numFollows,
      numFollowing: this.props.numFollowing
    };
    this.toggleFollow = this.toggleFollow.bind(this);
  }

  componentDidMount() {
    // console.log(this.props);
    this.props.fetchUser(this.props.match.params.userId);
    // this.props.fetchFollowers(this.props.match.params.userId);
    // this.props.fetchFollowees(this.props.match.params.userId);
  }

  toggleFollow(e) {
    e.preventDefault();
    const follow = this.props.followed;
    console.log(this.props);
    if (follow) {
      return this.props.deleteFollow(this.props.user.id, this.props.currentUser.id);
    } else {
      return this.props.createFollow(this.props.user.id, this.props.currentUser.id);
    }
  }

  toggleFollowButton(){
    const followedButton = <button className="following" onClick={this.toggleFollow}>Following</button>;
    const notFollowedButton = <button className="follow" onClick={this.toggleFollow}>Follow</button>;
    if (this.props.user.id !== this.props.currentUser.id) {
      return (this.props.followed) ? followedButton : notFollowedButton;
    } else {
      return <button className="empty-button">Edit Profile</button>;
    }
  }

  render() {
    return(
      <div className="profile-grid user-profile-container">
        <img className="profile-img" src={this.props.user.img_url}/>
        <div className="profile-section">
          <div className="profile-top-row">
            <div className="profile-username">{this.props.user.username}</div>
            <div className="follow-button">{this.toggleFollowButton()}</div>
          </div>
          <div className="profile-numbers">
            <div className="num=posts">{this.props.numPosts}&nbsp;posts</div>
            <div className="num-followers">{this.props.numFollows}&nbsp;followers</div>
            <div className="num-following">{this.props.numFollowing}&nbsp;following</div>
          </div>
        </div>
    </div>
    );
  }

}

export default UserInfo;
