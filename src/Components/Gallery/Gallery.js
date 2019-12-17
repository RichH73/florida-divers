import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import { images } from './images';

class Gallery extends Component {
  render() {
    return <ImageGallery items={images} />;
  }
}

export default Gallery;
