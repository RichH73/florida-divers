import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';

import ReactGA from 'react-ga';
class GalleryDisplay extends Component {
	componentDidMount() {
		ReactGA.pageview('/Galleries');
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/galleries`,
		}).then((response) => {
			this.props.getNewGalleries(response.data);
		});
	}

	imageMapping = (gallery) => {
		const { serverURL } = this.props;
		return gallery.images.map((img) => {
			return {
				original: `${serverURL}/images/galleries/${gallery.dirName}/${img.original}`,
				thumbnail: `${serverURL}/images/galleries/${gallery.dirName}/${img.thumbnail}`,
			};
		});
	};

	render() {
		const galleryIndex = this.props.viewingGallery;
		const gallery = this.props.imageGalleries
			.filter((gallery) => {
				return gallery._id === galleryIndex;
			})
			.map((gallery) => <ImageGallery items={this.imageMapping(gallery)} />);
		console.log('the view', gallery);
		return gallery;
	}
}

const mapStateToProps = (state) => ({
	stuff: state,
	imageGalleries: state.galleries.siteImages,
	viewingGallery: state.galleries.galleryView,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryDisplay);
