const initialState = {
	username: '',
	//_id: '',
	firstName: '',
	lastName: '',
	email: '',
	user: false,
};

const userInfo = (state = initialState, data) => {
	switch (data.type) {
		case 'NewUser':
			return {
				...data.data,
				//username: data.data.username
			};
		default:
			return {
				...state,
			};
	}
};

export default userInfo;
