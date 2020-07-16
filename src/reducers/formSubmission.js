const initialState = {
	name: '',
	email: '',
	phone: '',
	note: '',
};

const listing = (state = initialState, data) => {
	switch (data.type) {
		case 'NewFormData':
			return {
				...state,
				...data.data,
			};
		default:
			return state;
	}
};

export default listing;
