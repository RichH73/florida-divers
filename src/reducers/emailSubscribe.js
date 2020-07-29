const initialState = {
	email: '',
};

const emailSubscribe = (state = initialState, data) => {
	switch (data.type) {
		case 'NewEmailAddress':
			console.log('from the reducer', data.data);
			return {
				//...state,
				...data.data,
			};
		case 'ClearEmailAddress':
			return initialState;
		default:
			return state;
	}
};

export default emailSubscribe;
