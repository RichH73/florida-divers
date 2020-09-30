const initialState = {
	siteImages: [],
	galleryView: '',
};

const getGalleries = (state = initialState, galleries) => {
	switch (galleries.type) {
		case 'NewGalleries':
			return {
				...state,
				siteImages: galleries.data,
			};
		case 'GalleryID':
			return {
				...state,
				galleryView: galleries.data,
			};
		default:
			return state;
	}
};

export default getGalleries;
