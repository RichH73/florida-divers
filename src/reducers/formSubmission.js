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

		case 'ClearContactForm':
			return initialState;
		default:
			return state;
	}
};

export default listing;
