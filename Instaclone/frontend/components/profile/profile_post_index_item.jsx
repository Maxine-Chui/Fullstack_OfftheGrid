import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfilePostIndex from './profile_post_index';
import Modal from 'react-modal';

class ProfilePostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      toggleModal: false
    };

  }

  // toggleModal() {
  //
  // }
  //
  //
  //
  render() {
    return (
      <div className="profile-grid-item">
        <img src={this.props.post.img_url}/>
      </div>

    );
  }


}
// <Modal
//   isOpen=
//   onRequestClose
//   backDropClosesModal //boolean
//   className=""
//   overlayClassName=""
//   >
//
// </Modal>


export default ProfilePostIndexItem;
