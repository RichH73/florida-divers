import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { forEach, flatten } from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import axios from "axios";
import './imgDrop.css'

class ImageDrop extends Component {
  state = {
    file: []
  };

  submitHandler = event => {
    event.preventDefault();
    //this.props.loader(true);
    let images = [];
    event.preventDefault();
    let fileData = new FormData();
    let imgFiles = this.props.save_files;
    forEach(imgFiles, function(file) {
      fileData.append("file", file);
      images.push(file.name);
    });
    let gallery_data = {
      gallery_name: this.props.gallery_name,
    };
    fileData.append("data", JSON.stringify(gallery_data));
    axios({
      method: "post",
      url: "http://localhost:8600/galleries/upload",
      headers: {
        Authorization: `Bearer ${localStorage.floridiversToken}`
      },
      data: fileData
    }).then(response => {
      //this.props.loader(false);
    });
  };

  change_handler = event => {
    this.props.gallery_name_handler({
      [event.target.name]: event.target.value
    });
  };

  clickHandler = path => {
    this.props.delete_album_photos(path);
  };

  onPreviewDrop = files => {
    const save_files = files.map(file => file);
    const newFile = files.map(file => ({
      lastModified: file.lastModified,
      __proto__: file.__proto__,
      name: file.name,
      path: file.name,
      size: file.size,
      type: file.type,
      webkitRelativePath: file.webkitRelativePath,
      length: file.length,
      preview: URL.createObjectURL(file),
      id: file.name
    }));
    this.props.new_album({
      files: flatten([...this.props.photos, newFile]),
      save_files: flatten([...this.props.save_files, save_files])
    });
  };

  render() {
    return (
      <div className="edit-profile-dropbox">
          <div style={{ textAlign: "center", marginBottom: "20px", gridArea: 'opener' }}>
            Create a new photo album
          </div>
          <div className='edit-profile-image-drop-box-album-info'>
            <div className='edit-profile-image-flex-box'>
            <div className='edit-profile-image-drop-box-name'>
              Gallery Name:{" "}
              <input type="text" name="gallery_name" onChange={this.change_handler} />
            </div>
            <div className='edit-profile-image-drop-box-button'>
              <button
                className="btn btn-success"
                type="submit"
                onClick={this.submitHandler}
              >
                Create
              </button>
              </div>
            </div>
          {/* </div> */}
          <div className="edit-profile-image-drop-box-body">
          <Dropzone accept="image/*" onDrop={this.onPreviewDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  className="green-box edit-profile-image-drop-box-dropper"
                  {...getRootProps()}
                >
                  {this.props.innerMessage}
                  <input {...getInputProps()} />
                  <span>
                    Drop your pictures here.
                  </span>
                </div>
              </section>
            )}
          </Dropzone>
        </div>

        {this.props.photos.length > 0 && (
          <div>
            <h4>Photos to be added</h4>
            <div id="imagedrop-image-preview">
              {this.props.photos.map(file => (
                <div className="imagedrop-image-preview-image">
                  <img
                    alt="Preview"
                    key={file.preview}
                    src={file.preview}
                    onClick={() => this.clickHandler(file.path)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  gallery_name: state.gallery_uploader.gallery_name,
  photos: state.gallery_uploader.photos,
  save_files: state.gallery_uploader.save_files
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ImageDrop);