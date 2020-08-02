import _ from 'lodash';

const initial_state = {
	gallery: [],
	galleryId: '',
	images: [],
	deleteImages: [],
};

const edit_gallery = (state = initial_state, data) => {
	const grabImages = (gallery) => {
		const images = gallery.map((gal) => {
			return gal.images;
		});
		return _.flatten(images);
	};
	const removeImage = (image) => {
		const imagesToRemove = state.images.map((image) => {
			return state.images.filter((gal) => {
				return gal._id !== image._id;
			});
		});
		return [...state.deleteImages, image];
	};

	switch (data.type) {
		case 'galleryData':
			console.log(data.data.map((gallery) => gallery.images)[0]);
			return {
				...state,
				gallery: data.data,
				galleryId: _.get(_.first(data.data), '_id'),
				images: data.data.map((gallery) => gallery.images)[0], //grabImages(data.data)
			};
		case 'deleteImage':
			//console.log({...images: newImages(data.image)})
			return {
				...state,
				deleteImages: removeImage(data.image),
				images: state.images.filter((image) => image._id !== data.image._id),
			};
		case 'EditorClear':
			return initial_state;
		default:
			return state;
	}
};

export default edit_gallery;
