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
};

const packageInitialState = {
	title: '',
	price: '',
	link: '',
	linkText: '',
};

const learningPackages = (state = initialState, data) => {
	switch (data.type) {
		case 'NewPackages':
			return {
				packages: data.diveCourses,
			};
		case 'UpdatePackages':
			return {
				packages: data.data,
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
