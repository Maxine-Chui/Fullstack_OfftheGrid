import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import FollowsShow from './follows_show';

class FollowsItem extends React.Component {
  constructor(props){
    super(props);

  }

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

export default FollowsItem;
