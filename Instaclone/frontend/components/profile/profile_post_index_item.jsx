import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProfilePostIndex from './profile_post_index';
import Modal from 'react-modal';
import PostShowContainer from './post_show_container';

class ProfilePostIndexItem extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillMount() {
      Modal.setAppElement('body');
   }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  render() {
    const { post, comments } = this.props;
    return (
      <div>
        <div className="profile-grid-item">
          <a onClick={() => this.openModal()}><img key={post.id} src={post.img_url}/></a>
        </div>


        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          backDropClosesModal={true}
          shouldReturnFocusAfterClose={false}
          className="post-show-modal"
          overlayClassName="post-show-overlay"
          >
          <button className="exit-modal"><i className="fa fa-times" onClick={this.closeModal} aria-hidden="true"></i></button>

          <PostShowContainer post={ post } comments={comments}/>
        </Modal>
      </div>
    );
  }


}


export default ProfilePostIndexItem;
