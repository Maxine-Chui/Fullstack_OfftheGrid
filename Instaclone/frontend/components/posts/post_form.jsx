import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'muw9bwfy';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/dqhhpt0sj/image/upload';

class PostForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      uploadedFileCloudinaryUrl: '',
      caption: '',
      location: ''
    };
  }

  handleSubmit(e){
    e.preventDefault();
    const post = this.state;
    this.props.createPost(post);
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render() {
    return(
      <form className="post-form" onSubmit={this.handleSubmit}>
        <div>
          <Dropzone className="file-upload-box"
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div className="post-form-input-container">
          <label>
            <input type="text"
              placeholder="Caption"
              value={this.state.caption}
              onChange={this.update('caption')}
              className="post-form-input"
              />
          </label>
          <label>
            <input type="text"
              placeholder="Location"
              value={this.state.location}
              onChange={this.update('location')}
              className="post-form-input"
              />
          </label>
        </div>

        <div>
          {this.state.uploadedFileCloudinaryUrl === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>

        <input className="create-post-button" type="submit" value="Share"/>

    </form>
    );
  }
  // render() {
  //   return(
  //     <form>
  //       <div className="post-form">
  //         <Dropzone className="file-upload-box"
  //           multiple={false}
  //           accept="image/*"
  //           onDrop={this.onImageDrop.bind(this)}>
  //           <p>Drop an image or click to select a file to upload.</p>
  //         </Dropzone>
  //       </div>
  //
  //       <div>
  //         {this.state.uploadedFileCloudinaryUrl === '' ? null :
  //         <div>
  //           <p>{this.state.uploadedFile.name}</p>
  //           <img src={this.state.uploadedFileCloudinaryUrl} />
  //         </div>}
  //       </div>
  //
  //
  //   </form>
  //   );
  // }
}

export default PostForm;
