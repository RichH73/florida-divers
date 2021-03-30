const initialState = {
	studentData: [],
};

const studentRecords = (state = initialState, data) => {
	const students = data.studentRecords;
	switch (data.type) {
		case 'allRecords':
			return {
				...state,
				studentData: data.studentRecords,
			};
		default:
			return state;
	}
};

export default studentRecords;
