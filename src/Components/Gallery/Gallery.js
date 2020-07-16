import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";
class Gallery extends Component {
  componentDidMount() {
    axios({
      method: "get",
      url: `${this.props.serverURL}galleries`,
      // url: 'http://localhost:8600/galleries',
    }).then((response) => {
      this.props.getNewGalleries(response.data);
    });
  }

  render() {
    return (
      <div className="gallery">
        {this.props.imageGalleries.map((gallery) => (
          <React.Fragment>
            <h1>{gallery.galleryName}</h1>
            <ImageGallery items={gallery.images} />
          </React.Fragment>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  imageGalleries: state.galleries.siteImages,
  serverURL: state.Config.url,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
