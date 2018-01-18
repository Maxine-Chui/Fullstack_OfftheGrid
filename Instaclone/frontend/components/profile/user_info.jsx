import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';
import FollowsContainer from './follows_container';

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numFollows: this.props.numFollows,
      numFollowing: this.props.numFollowing,
      modalOpen: false,
      modalOpen2: false,
    };
    this.toggleFollow = this.toggleFollow.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openModal2 = this.openModal2.bind(this);
    this.closeModal2 = this.closeModal2.bind(this);
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.userId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchUser(nextProps.match.params.userId);
    }
  }

  openModal() {
    this.setState({
      modalOpen: true,
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false,
    });
  }

  openModal2() {
    this.setState({
      modalOpen2: true,
    });
  }

  closeModal2() {
    this.setState({
      modalOpen2: false,
    });
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
            <button className="num-followers" onClick={() => this.openModal()}><strong>{this.props.numFollows}</strong>&nbsp;&nbsp;{this.follows()}</button>
            <button className="num-following" onClick={() => this.openModal2()}><strong>{this.props.numFollowing}</strong>&nbsp;&nbsp;following</button>
          </div>

          <Modal
            isOpen={this.state.modalOpen}
            onRequestClose={this.closeModal}
            backDropClosesModal={true}
            shouldReturnFocusAfterClose={true}
            className="post-show-modal"
            overlayClassName="post-show-overlay"
            >
            <button className="exit-modal"><i className="fa fa-times" onClick={this.closeModal} aria-hidden="true"></i></button>

            <FollowsContainer followType="followers"/>
          </Modal>

          <Modal
            isOpen={this.state.modalOpen2}
            onRequestClose={this.closeModal2}
            backDropClosesModal={true}
            shouldReturnFocusAfterClose={true}
            className="post-show-modal"
            overlayClassName="post-show-overlay"
            >
            <button className="exit-modal"><i className="fa fa-times" onClick={this.closeModal2} aria-hidden="true"></i></button>

            <FollowsContainer followType="followees"/>
          </Modal>

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
