import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import ImageDrop from '../../Helpers/imgDrop/imgDrop';
import _ from 'lodash';

class EditGallery extends Component {
	state = {
		image: '',
		imageAddress: 'https://www.floridivers.com/images/galleries/pompano_beach/large.C93E06E8-767F-4729-B9B5-8AFA75B57D9Bj.peg',
		imageDisplay: false,
	};
	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/galleries`,
		}).then((response) => {
			this.props.getNewGalleries(response.data);
		});
	}

	editGallery = (_id) => {
		this.props.galleryToEdit(
			this.props.galleries.filter((gallery) => {
				return _.isEqual(gallery._id, _id);
			})
		);
	};

	removeImage = (_id) => {
		console.log('image to remove', _id);
		this.props.removeImage(_id);
	};

	editChangeHandler = (event) => {
		this.props.gallery_name_handler({
			[event.target.name]: event.target.value,
		});
	};

	imageOverlay = (id) => {
		console.log(this.state);
		if (id === 'clear')
			this.setState({
				image: '',
				imageAddress: '',
				imageDisplay: false,
			});
		this.setState({
			image: id,
			imageDisplay: true,
		});
		// const styles = { zIndex: '350', width: '60%', height: '600px', position: 'absolute' }
		// const overlayDiv = <div steyle={styles}>Something to test with</div>
		// return <div style={{ zIndex: '350', width: '60%', height: '600px', position: 'absolute' }}>Something to test with</div>
	};

	displayGalleryToEdit = () => {
		const { serverURL, galleryName } = this.props;
		return this.props.editGallery.map((gallery) => (
			<div>
				<div className="editing-gallery-title">
					<label>Editing Gallery:</label>
					<input type="text" placeholder={gallery.galleryName} />
				</div>
				<div className="editing-gallery-image-boxes">
					{gallery.images.map((image) => (
						<div className="editing-gallery-image-box">
							<div>{image._id}</div>
							<div>
								<a href={`${image.original}`} target="new">
									Original Image
								</a>
								<br />
								<a href={`${image.thumbnail}`} target="new">
									Thumbnail Image
								</a>
							</div>
							<img src={image.thumbnail} onClick={() => this.imageOverlay(image._id)} />
							<div className="editing-gallery-image-box-delete" onClick={() => this.removeImage(image._id)}>
								Delete this image?
							</div>
						</div>
					))}
				</div>
			</div>
		));
	};

	render() {
		const { galleries } = this.props;
		return (
			<div className="edit-gallery-form">
				{this.state.imageDisplay ? (
					<div style={{ zIndex: '350', width: '60%', height: '600px', position: 'absolute', top: '0', left: '0' }}>
						<img src={this.state.imageAddress} onClick={() => this.imageOverlay('clear')} />
					</div>
				) : (
					''
				)}
				<div className="edit-gallery-form-header">
					<h4>Edit Gallery</h4>
				</div>
				<div className="current-gallery-names">
					{galleries.map((gallery) => (
						<div onClick={() => this.editGallery(gallery._id)} key={gallery._id}>
							Gallery Name: {gallery.galleryName}
						</div>
					))}
				</div>
				<div style={{ textAlign: 'center', margin: '1em 0' }}>
					{/* <button className="btn btn-success" type="submit" onClick={this.submitHandler}>
						Save
					</button> */}
				</div>
				<this.displayGalleryToEdit />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.richText.text,
	gallery_name: state.gallery_uploader.gallery_name,
	photos: state.gallery_uploader.photos,
	save_files: state.gallery_uploader.save_files,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	galleries: state.galleries.siteImages,
	editGallery: state.edit_gallery.gallery,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	galleryTitle: state.edit_gallery.gallery.galleryName,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
