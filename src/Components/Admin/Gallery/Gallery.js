import React, { Component } from "react";
import "./Gallery.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import ImageDrop from "../../Helpers/imgDrop/imgDrop";
import _ from "lodash";
class Gallery extends Component {
  submitHandler = (event) => {
    event.preventDefault();
    let images = [];
    event.preventDefault();
    let fileData = new FormData();
    let imgFiles = this.props.save_files;
    _.forEach(imgFiles, function (file) {
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
        Authorization: `Bearer ${localStorage.floridiversToken}`,
      },
      data: fileData,
    }).then((response) => {});
  };

  change_handler = (event) => {
    this.props.gallery_name_handler({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div className="edit-gallery-dropbox">
        <div
          style={{
            textAlign: "center",
            marginBottom: "20px",
            gridArea: "opener",
          }}
        >
          Create a new photo album
        </div>
        <div className="" style={{ margin: "1em auto", textAlign: "center" }}>
          <lable>Gallery Name: </lable>
          <input
            type="text"
            name="gallery_name"
            onChange={this.change_handler}
          />
        </div>
        <ImageDrop />
        <div style={{ textAlign: "center", margin: "1em 0" }}>
          <button
            className="btn btn-success"
            type="submit"
            onClick={this.submitHandler}
          >
            Create New Gallery
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  text: state.richText.text,
  gallery_name: state.gallery_uploader.gallery_name,
  photos: state.gallery_uploader.photos,
  save_files: state.gallery_uploader.save_files,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
