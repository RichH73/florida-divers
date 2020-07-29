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

export const userCheck = (data) => {
	return {
		type: 'NewUser',
		data,
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

export const removeImage = (data) => {
	console.log(data);
	return {
		type: 'deleteImage',
		data,
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
