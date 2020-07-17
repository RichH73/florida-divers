const initialState = {
	panel: 'gallery',
};

const adminPanel = (state = initialState, data) => {
	switch (data.type) {
		case 'NavigatePanel':
			return {
				...state,
				panel: data.data,
			};
		default:
			return state;
	}
};

export default adminPanel;
