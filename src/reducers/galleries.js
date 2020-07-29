const initialState = {
	siteImages: [],
	galleryView: '5f0fa4f7ecef242e63c1b410',
};

const getGalleries = (state = initialState, galleries) => {
	switch (galleries.type) {
		case 'NewGalleries':
			return {
				...state,
				siteImages: galleries.data,
			};
		default:
			return state;
	}
};

export default getGalleries;
