import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfilePostIndex from './profile_post_index';

class ProfilePostIndexItem extends React.Component {

  render() {
    return (
      <div className="profile-grid-item">
        <img src={this.props.post.img_url}/>
      </div>
    );
  }


}


export default ProfilePostIndexItem;
