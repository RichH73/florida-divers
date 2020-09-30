import axios from 'axios';

export const getNewGalleries = (data) => {
	return {
		type: 'NewGalleries',
		data,
	};
};

export const new_album = (files) => {
	return {
		type: 'new_gallery',
		photos: files.files,
		save_files: files.save_files,
		//image_array: files.image_array
	};
};

export const delete_album_photos = (path) => ({
	type: 'delete_album_photos',
	path,
});

export const gallery_name_handler = (data) => ({
	type: 'album_text_data',
	data,
});

export const contactForm = (data) => {
	return {
		type: 'NewFormData',
		data,
	};
};

export const clearForm = () => {
	return {
		type: 'ClearContactForm',
	};
};

export const learningPackageData = (data) => {
	return {
		type: 'NewPackages',
		data,
	};
};

export const updateLearningPackageData = (data) => {
	return {
		type: 'UpdatePackages',
		data,
	};
};

export const addNewStudent = (student) => {
	return {
		type: 'newStudent',
		student,
	};
};

export const loadPackageData = (data) => {
	return {
		type: 'EditPackage',
		data,
	};
};

export const changeAdminPanel = (data) => {
	return {
		type: 'NavigatePanel',
		data,
	};
};

export const editText = (data) => {
	return {
		type: 'new_text',
		data,
	};
};

export const clearRichText = () => {
	return {
		type: 'clear_rich_text',
	};
};

export const clearnLearnForm = () => {
	return { type: 'clearLearnForm' };
};

export const newPackageFormData = (key, value) => {
	return {
		type: 'newLearnFormData',
		key,
		value,
	};
};

export const messageSeen = (data) => {
	return function (dispatch) {};
};

// User actions
export const userCheck = (data) => {
	return {
		type: 'NewUser',
		data,
	};
};

export const adminLogged = () => {
	return {
		type: 'Admin_Login',
	};
};

export const checkForUserToken = () => {
	return function (dispatch) {
		axios({
			method: 'post',
			url: `https://www.floridivers.com:8600/login/token_check`,
			headers: {
				Authorization: `bearer ${localStorage.floridiversToken}`,
			},
		})
			.then((response) => {
				if (response.status && response.status === 200) {
					dispatch(userCheck(response.data));
					dispatch(adminLogged());
				}
			})
			.catch((error) => console.log(error));
	};
};

export const spinnerStatus = (state) => {
	return {
		type: state,
	};
};

/*
	The following funtions are used in editing galleries
*/
export const galleryToEdit = (data) => {
	return {
		type: 'galleryData',
		data,
	};
};

export const removeImage = (image) => {
	return {
		type: 'deleteImage',
		image,
	};
};

export const setGalleryView = (data) => {
	return {
		type: 'GalleryID',
		data,
	};
};

export const clearUploader = () => {
	return {
		type: 'UploaderClear',
	};
};

export const clearEditor = () => {
	return {
		type: 'EditorClear',
	};
};

// Subscribe to newsletter
export const subscribeEmail = (data) => {
	return {
		type: 'NewEmailAddress',
		data,
	};
};

export const clearSubscribeEmail = () => {
	return {
		type: 'ClearEmailAddress',
	};
};

export const studentEdit = (id, key, value) => {
	return {
		type: 'EditStudent',
		id,
		key,
		value,
	};
};

export const clearStudentForm = () => {
	return {
		type: 'ClearStudent',
	};
};
