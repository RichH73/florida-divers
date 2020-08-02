const initialState = {
	_id: '',
};

const editStudent = (state = initialState, data) => {
	switch (data.type) {
		case 'EditStudent':
			return {
				...state,
				_id: data.id,
				[data.key]: data.value,
			};
		case 'ClearStudent':
			return initialState;
		default:
			return state;
	}
};

export default editStudent;
