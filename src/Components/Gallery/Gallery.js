import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import ReactGA from 'react-ga';
class Gallery extends Component {
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
		return (
			<div className="gallery">
				{this.props.imageGalleries.map((gallery) => (
					<React.Fragment>
						<h1>{gallery.galleryName}</h1>
						<ImageGallery items={this.imageMapping(gallery)} />
					</React.Fragment>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	imageGalleries: state.galleries.siteImages,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
