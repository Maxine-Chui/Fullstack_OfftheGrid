import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FollowsShow from './follows_show';

class FollowsItem extends React.Component {
  constructor(props){
    super(props);

  }

  // followerOrFollowee() {
  //   const {follow} = this.props;
  //   if (this.props.followType === "followers") {
  //     return `/users/${follow.follower_id}`;
  //   } else if (this.props.followType === "followees") {
  //     return `/users/${follow.follower_id}`;
  //   }
  // }

  render(){
    const {follow} = this.props;
    return (
      <li>
          <div className="follow-item">
            <img className="follow-photo"src={follow.profile_pic}/>
            <div className="follow-name-section">
              <div className="follow-name">{follow.name}</div>
              <div className="follow-username">{follow.username}</div>
            </div>
          </div>
      </li>
    );
  }
}
// <Link to={this.followerOrFollowee()}></Link>

export default FollowsItem;
