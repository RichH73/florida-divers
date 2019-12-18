import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import { images } from './images';

class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <ImageGallery items={images} />
      </div>
    );
  }
}

export default Gallery;
