const initialState = {
	_id: '',
	firstName: '',
	lastName: '',
	email: '',
	address: '',
	city: '',
	state: '',
	zipCode: '',
	phone: '',
	certification: '',
	certificationLevel: '',
	certificationDate: '',
};

const editStudent = (state = initialState, data) => {
	switch (data.type) {
		case 'EditStudent':
			return {
				...state,
				//_id: data.id,
				[data.key]: data.value,
			};
		case 'ClearStudent':
			return initialState;
		case 'Student_Data':
			return {
				...state,
				...data.student,
			};
		default:
			return state;
	}
};

export default editStudent;
