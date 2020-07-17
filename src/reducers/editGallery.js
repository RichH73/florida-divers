const initial_state = {
	gallery: [],
};

const edit_gallery = (state = initial_state, data) => {
	switch (data.type) {
		case 'galleryData':
			return {
				...state,
				gallery: data.data,
			};
		case 'deleteImage':
		// TODO
		default:
			return state;
	}
};

export default edit_gallery;
