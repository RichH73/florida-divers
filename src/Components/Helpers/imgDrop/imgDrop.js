import React, { Component } from "react";
import Dropzone from "react-dropzone";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import './imgDrop.css';
import _ from 'lodash';

class ImageDrop extends Component {
  state = {
    file: []
  };

  // submitHandler = event => {
  //   event.preventDefault();
  //   //this.props.loader(true);
  //   let images = [];
  //   event.preventDefault();
  //   let fileData = new FormData();
  //   let imgFiles = this.props.save_files;
  //   forEach(imgFiles, function(file) {
  //     fileData.append("file", file);
  //     images.push(file.name);
  //   });
  //   let gallery_data = {
  //     gallery_name: this.props.gallery_name,
  //   };
  //   fileData.append("data", JSON.stringify(gallery_data));
  //   axios({
  //     method: "post",
  //     url: "http://localhost:8600/galleries/upload",
  //     headers: {
  //       Authorization: `Bearer ${localStorage.floridiversToken}`
  //     },
  //     data: fileData
  //   }).then(response => {
  //     //this.props.loader(false);
  //   });
  // };

  // change_handler = event => {
  //   this.props.gallery_name_handler({
  //     [event.target.name]: event.target.value
  //   });
  // };

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
      files: _.flatten([...this.props.photos, newFile]),
      save_files: _.flatten([...this.props.save_files, save_files])
    });
  };

  render() {
    return (
      <React.Fragment>
          <div className="edit-gallery-image-drop-box-body">
          <Dropzone accept="image/*" onDrop={this.onPreviewDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div
                  className="edit-gallery-image-drop-box-dropper"
                  {...getRootProps()}
                >
                  {this.props.innerMessage}
                  <input {...getInputProps()} />
                  <p>
                    You can drag and drop images here, or click this box and a file select box will open.
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        {this.props.photos.length > 0 && (
          <div className='imagedrop-image-preview-section'>
            <h4>Image preview.</h4>
            <p>Click on an image to remove it from the upload queue.</p>
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
      </React.Fragment>
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