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
      img_url: '',
      caption: '',
      location: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const post = {
      img_url: this.state.img_url,
      caption: this.state.caption,
      location: this.state.location,
    };
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
          img_url: response.body.secure_url
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
      <div className="post-form" >
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

        <div className="uploaded-photo">
          {this.state.img_url === '' ? null :
          <div>
            <p>{this.state.uploadedFile.name}</p>
            <img src={this.state.img_url} />
          </div>}
        </div>

        <button className="create-post-button" onClick={this.handleSubmit}>Share</button>

    </div>
    );
  }

}

export default PostForm;
