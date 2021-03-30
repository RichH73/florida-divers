import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
// import ImageDrop from '../../Helpers/imgDrop/imgDrop';
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

	componentWillUnmount() {
		this.props.clearEditor();
	}

	editGallery = (event) => {
		this.props.galleryToEdit(
			this.props.galleries.filter((gallery) => {
				return _.isEqual(gallery._id, event.target.value);
			})
		);
	};

	removeImage = (image) => {
		this.props.removeImage(image);
	};

	editChangeHandler = (event) => {
		this.props.gallery_name_handler({
			[event.target.name]: event.target.value,
		});
	};

	imageOverlay = (id) => {
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

	onSubmitHandler = () => {
		const { editGallery, deleteImages } = this.props;
		const saveGallery = {
			id: editGallery.map((gallery) => gallery._id),
			dirName: editGallery.map((gallery) => gallery.dirName),
			deleteImages,
		};
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/galleries/remove-images`,
			data: saveGallery,
		}).then((response) => {
			this.props.clearEditor();
			this.props.history.push('/gallery-index');
		});
	};

	displayGalleryToEdit = () => {
		const { serverURL, gallery_images } = this.props;
		return this.props.editGallery.map((gallery) => (
			<div>
				<div className="editing-gallery-title">
					<label>Editing Gallery:</label>
					<input type="text" placeholder={gallery.galleryName} />
				</div>
				<div className="editing-gallery-image-boxes">
					{gallery_images.map((image) => (
						<div className="editing-gallery-image-box">
							<div>{image._id}</div>
							<div>
								<a href={`${serverURL}/images/galleries/${gallery.dirName}/${image.original}`} target="new">
									Original Image
								</a>
								<br />
								<a href={`${serverURL}/images/galleries/${gallery.dirName}/${image.thumbnail}`} target="new">
									Thumbnail Image
								</a>
							</div>
							<img src={`${serverURL}/images/galleries/${gallery.dirName}/${image.thumbnail}`} alt="" />
							<div className="editing-gallery-image-box-delete">
								<div className="editing-gallery-image-delete" onClick={() => this.removeImage(image)}>
									{/* onClick={() => this.imageOverlay(image._id)} */}
									Delete this image?
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		));
	};

	editButtons = () => {
		return (
			<div style={{ textAlign: 'center', margin: '1em 0' }}>
				<button className="btn" type="submit" onClick={this.onSubmitHandler} id="save-button">
					Save
				</button>
				<button className="btn" id="delete-button" onClick={this.deleteGallery}>
					Delete Gallery
				</button>
				<input type="checkbox" name="delete-check" onChange={this.deleteGallery} />
			</div>
		);
	};

	selectHandler = (event) => {};

	deleteGallery = (event) => {};

	render() {
		const { galleries } = this.props;
		return (
			<div className="edit-gallery-form">
				{this.state.imageDisplay ? (
					<div style={{ zIndex: '350', width: '60%', height: '600px', position: 'absolute', top: '0', left: '0' }}>
						<img src={this.state.imageAddress} alt="" />
						{/* onClick={() => this.imageOverlay('clear')}  */}
					</div>
				) : (
					''
				)}
				<div className="edit-gallery-form-header">
					<h4>Edit Gallery</h4>
				</div>
				<div className="current-gallery-names">
					<label>Select Gallery: </label>
					<select name="gallery" onChange={this.editGallery}>
						<option></option>
						{galleries.map((gallery) => (
							<option value={gallery._id}>{gallery.galleryName}</option>
						))}
					</select>
				</div>
				{!!this.props.galId ? this.editButtons() : ''}

				<this.displayGalleryToEdit history={this.props.history} />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.richText.text,
	gallery_name: state.gallery_uploader.gallery_name,
	gallery_images: state.edit_gallery.images,
	deleteImages: state.edit_gallery.deleteImages,
	photos: state.gallery_uploader.photos,
	save_files: state.gallery_uploader.save_files,
	saveImages: state.edit_gallery.images,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	galleries: state.galleries.siteImages,
	editGallery: state.edit_gallery.gallery,
	galleryTitle: state.edit_gallery.gallery.galleryName,
	galId: state.edit_gallery.galleryId,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(EditGallery);
