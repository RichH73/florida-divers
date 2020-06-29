import React, { Component } from "react";
import ImageGallery from "react-image-gallery";
import "./Gallery.css";
//import { images } from './images';
import { more_images } from './images.js'
import axios from 'axios';
import _ from 'lodash';
const imageFile = window
class Gallery extends Component {
state = {
  galleries: []
}
componentDidMount() {
  axios({
    method: 'get',
    url: 'http://localhost:8550/pictures'
  })
  .then((response) => {
    this.setState({
      galleries: response.data
    })
  })
}

imgMap = (images) => {
  return <ImageGallery />
}

  render() {
    return (
      <div className='gallery'>
        {this.state.galleries.map(gallery => (
          <React.Fragment>
            <h1>{gallery.name}</h1>
            <ImageGallery items={gallery.images}/>
          </React.Fragment>
        ))}

      <h1>And some more!!</h1>
        <ImageGallery items={more_images} />
        
      </div>
    );
  }
}

export default Gallery;
