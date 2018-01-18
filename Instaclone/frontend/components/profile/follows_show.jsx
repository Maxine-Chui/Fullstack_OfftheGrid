import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FollowsItem from './follows_item';

class FollowsShow extends React.Component {
  constructor(props){
    super(props);

  }

  // componentDidMount(){
  //   this.props.fetchFollowers(this.props.userId);
  // }

  followersModal(){
    return(
      <div>
        <div className="follows-title">Followers</div>
        <ul className="follows-items">
          {
            this.props.user.followers.map(follower => (
            <FollowsItem
              key={follower.follower_id}
              follow={ follower }
              followType="followers"/>
            ))
          }
        </ul>
      </div>
    );
  }

  followeesModal(){
    return(
      <div>
        <div className="follows-title">Following</div>
        <ul className="follows-items">
          {
            this.props.user.followees.map(followee => (
            <FollowsItem
              key={followee.followee_id}
              follow={ followee }
              followType="followees"/>
            ))
          }
        </ul>
      </div>
    );
  }

  render() {
    // console.log(this.props);
    if (this.props.followType === "followers") {
      return this.followersModal();
    } else if (this.props.followType === "followees") {
      return this.followeesModal();
    }
  }

}

export default FollowsShow;
