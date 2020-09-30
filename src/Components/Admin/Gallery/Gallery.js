import React, { Component } from 'react';
import './Gallery.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import ImageDrop from '../../Helpers/imgDrop/imgDrop';
import EditGallery from './EditGallery';
import _ from 'lodash';
class Gallery extends Component {
	componentWillUnmount() {
		this.props.clearEditor();
	}
	submitHandler = (event) => {
		event.preventDefault();
		this.props.spinnerStatus('show');
		let images = [];
		event.preventDefault();
		let fileData = new FormData();
		let imgFiles = this.props.save_files;
		_.forEach(imgFiles, function (file) {
			fileData.append('file', file);
			images.push(file.name);
		});
		let gallery_data = {
			gallery_name: this.props.gallery_name,
		};
		fileData.append('data', JSON.stringify(gallery_data));
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/galleries/upload`,
			headers: {
				Authorization: `Bearer ${localStorage.floridiversToken}`,
			},
			data: fileData,
		}).then((response) => {
			this.props.spinnerStatus('hide');
			this.props.clearEditor();
			this.props.history.push('/gallery-index');
		});
	};

	change_handler = (event) => {
		this.props.gallery_name_handler({
			[event.target.name]: event.target.value,
		});
	};

	hideSpinner = () => {
		this.props.spinnerStatus('hide');
	};

	showSpinner = () => {
		this.props.spinnerStatus('show');
	};

	render() {
		return (
			<React.Fragment>
				<div className="create-gallery-dropbox">
					<div
						style={{
							textAlign: 'center',
							marginBottom: '20px',
							gridArea: 'opener',
						}}
					>
						<h4>Create a new photo gallery</h4>
						<p>
							Type a name for the gallery you want to create. This is a simple title that will display above each gallery displayed in the gallery
							page. Then add some images you would like to upload to the gallery in the box below. Please restrict uploads to 6 images at a time for
							larger images. More images can be added to any gallery later in the edit gallery page (TODO).
						</p>
					</div>
					<div className="" style={{ margin: '1em auto', textAlign: 'center' }}>
						<label>Gallery Name: </label>
						<input type="text" name="gallery_name" onChange={this.change_handler} />
					</div>
					<ImageDrop />
					<div style={{ textAlign: 'center', margin: '1em 0' }}>
						<button className="btn btn-success" type="submit" onClick={this.submitHandler}>
							Create New Gallery
						</button>
					</div>
				</div>
				<EditGallery history={this.props.history} />
			</React.Fragment>
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
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
