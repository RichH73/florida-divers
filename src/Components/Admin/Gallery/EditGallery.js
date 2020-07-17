import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import ImageDrop from '../../Helpers/imgDrop/imgDrop';
import _ from 'lodash';

class EditGallery extends Component {
	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.serverURL}galleries`,
		}).then((response) => {
			this.props.getNewGalleries(response.data);
		});
	}

	// submitHandler = (event) => {
	// 	event.preventDefault();
	// 	this.props.spinnerStatus('show');
	// 	let images = [];
	// 	event.preventDefault();
	// 	let fileData = new FormData();
	// 	let imgFiles = this.props.save_files;
	// 	_.forEach(imgFiles, function (file) {
	// 		fileData.append('file', file);
	// 		images.push(file.name);
	// 	});
	// 	let gallery_data = {
	// 		gallery_name: this.props.gallery_name,
	// 	};
	// 	fileData.append('data', JSON.stringify(gallery_data));
	// 	axios({
	// 		method: 'post',
	// 		url: `${this.props.serverURL}galleries/upload`,
	// 		headers: {
	// 			Authorization: `Bearer ${localStorage.floridiversToken}`,
	// 		},
	// 		data: fileData,
	// 	}).then((response) => {
	// 		this.props.spinnerStatus('hide');
	// 		this.props.history.push('/gallery');
	// 	});
	// };

	// change_handler = (event) => {
	// 	this.props.gallery_name_handler({
	// 		[event.target.name]: event.target.value,
	// 	});
	// };

	// hideSpinner = () => {
	// 	this.props.spinnerStatus('hide');
	// };

	// showSpinner = () => {
	// 	this.props.spinnerStatus('show');
	// };

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
							<img src={image.thumbnail} onClick={() => this.removeImage(image)} />
							<div className="editing-gallery-image-box-delete">Delete this image?</div>
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
	galleries: state.galleries.siteImages,
	editGallery: state.edit_gallery.gallery,
	serverURL: state.Config.url,
	galleryTitle: state.edit_gallery.gallery.galleryName,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
