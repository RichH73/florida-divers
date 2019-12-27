import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
import { images } from './images';
import { more_images } from './images.js'
import axios from 'axios';
import _ from 'lodash';
const imageFile = window
class Gallery extends Component {




  render() {
    return (
      <div className='gallery'>
      <h1>Some pictures here!</h1>
        <ImageGallery items={images} />
      <h1>And some more!!</h1>
        <ImageGallery items={more_images} />
        
      </div>
    );
  }
}

export default Gallery;
