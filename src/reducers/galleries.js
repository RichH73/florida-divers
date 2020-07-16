const initialState = {
	siteImages: [],
};

const getGalleries = (state = initialState, galleries) => {
	switch (galleries.type) {
		case 'NewGalleries':
			return {
				siteImages: galleries.data,
			};
		default:
			return state;
	}
};

export default getGalleries;
