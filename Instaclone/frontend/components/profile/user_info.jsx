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
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  toggleFollow(e) {
    e.preventDefault();
    const follow = this.props.followed;
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

  posts(){
    if (this.props.numPosts > 1) {
      return 'posts';
    } else if (this.props.numPosts === 0) {
      return 'posts';
    } else {
      return 'post';
    }
  }

  follows(){
    if (this.props.numFollows > 1) {
      return 'followers';
    } else if (this.props.numFollows === 0) {
      return 'followers';
    } else {
      return 'follower';
    }
  }

  render() {
    return(
      <div className="user-profile-container">
        <img className="profile-img" src={this.props.user.img_url}/>
        <div className="profile-section">
          <div className="profile-top-row">
            <div className="profile-username">{this.props.user.username}</div>
            <div>{this.toggleFollowButton()}</div>
          </div>
          <div className="profile-numbers">
            <div className="num=posts"><strong>{this.props.numPosts}</strong>&nbsp;&nbsp;{this.posts()}</div>
            <div className="num-followers"><strong>{this.props.numFollows}</strong>&nbsp;&nbsp;{this.follows()}</div>
            <div className="num-following"><strong>{this.props.numFollowing}</strong>&nbsp;&nbsp;following</div>
          </div>
          <div className="profile-blurb">
            <div className="user-fullname">{this.props.user.name}</div>
            <div className="user-blurb">{this.props.user.blurb}</div>
          </div>
        </div>
    </div>
    );
  }

}

export default UserInfo;
