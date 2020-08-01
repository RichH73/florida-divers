import { editText } from '../actions/index';
const initialState = {
	packages: [
		{
			title: '',
			description: '',
			price: '',
			link: '',
			linkText: '',
		},
	],
	students: [
		{
			name: '',
			certification: '',
		},
	],
};

const packageInitialState = {
	title: '',
	price: '',
	link: '',
	linkText: '',
};

const learningPackages = (state = initialState, data) => {
	const addNewStudent = (student) => {
		console.log(student);
		return [student, ...state.students];
	};
	switch (data.type) {
		case 'NewPackages':
			return {
				...state,
				packages: data.diveCourses,
			};
		case 'UpdatePackages':
			return {
				...state,
				packages: data.data.packages,
				students: data.data.students,
			};
		case 'newStudent':
			//addNewStudent(data.student)
			return {
				...state,
				students: addNewStudent(data.student),
			};
		default:
			return state;
	}
};

export default learningPackages;

export const createNewPackage = (state = packageInitialState, data) => {
	switch (data.type) {
		case 'newLearnFormData':
			return {
				...state,
				[data.key]: data.value,
			};
		case 'clearLearnForm':
			return {
				title: '',
				price: '',
				link: '',
				linkText: '',
			};
		case 'EditPackage':
			return {
				...editText(data.data.description),
				_id: data.data._id,
				title: data.data.title,
				description: data.data.description,
				price: data.data.price,
				link: data.data.link,
				linkText: data.data.linkText,
			};
		default:
			return state;
	}
};
