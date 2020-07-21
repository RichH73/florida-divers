const initial_state = {
	gallery: [],
	deleteImages: {
		originals: [],
		thumbnails: [],
	},
};

const edit_gallery = (state = initial_state, data) => {
	switch (data.type) {
		case 'galleryData':
			return {
				...state,
				gallery: data.data,
			};
		case 'deleteImage':
		//console.log('edit gallery data', state.gallery.images)
		// return {
		// 	...state.gallery.images.filter(images => {
		// 		return images !== data
		// 	})
		// }
		// TODO
		default:
			return state;
	}
};

export default edit_gallery;
