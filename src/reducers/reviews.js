const initialState = { siteReviews: [] };

const allReviews = (state = initialState, data) => {
	switch (data.type) {
		case 'NewReviews':
			return {
				...state,
				siteReviews: data.reviews,
			};
		default:
			return state;
	}
};

export default allReviews;
