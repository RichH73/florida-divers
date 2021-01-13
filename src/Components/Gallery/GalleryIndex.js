import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import GalleryDisplay from '../Helpers/GalleryDisplay';
import ReactGA from 'react-ga';

class GalleryIndex extends Component {
	componentDidMount() {
		ReactGA.pageview('/Galleries');
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/galleries`,
		}).then((response) => {
			this.props.getNewGalleries(response.data);
			let galleryId = this.props.imageGalleries.map((gallery) => {
				return gallery._id;
			});
			this.props.setGalleryView(galleryId[0]);
		});
	}

	chooseGallery = (ID) => {
		this.props.setGalleryView(ID);
	};

	indexMapping = () => {
		const { imageGalleries, serverURL } = this.props;
		return imageGalleries.map((gallery) => (
			<div className="galleries-index-gallery" onClick={() => this.chooseGallery(gallery._id)}>
				<img src={`${serverURL}/images/galleries/${gallery.dirName}/${gallery.images[0].thumbnail}`} alt="" />
				<div>{gallery.galleryName}</div>
			</div>
		));
	};
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
		return (
			<div className="gallery-display-page">
				<div className="gallery-index">{this.indexMapping()}</div>
				{!!this.props.viewingGallery.length ? <GalleryDisplay /> : ''}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	imageGalleries: state.galleries.siteImages,
	viewingGallery: state.galleries.galleryView,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryIndex);
