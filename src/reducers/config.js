import { checkForUserToken } from '../actions/index';
import axios from 'axios';

const _ = require('lodash');

const adminCheck = () => {
	if (!!localStorage.floridiversToken) {
		axios({
			method: 'post',
			url: `https://www.floridivers.com:8600/login/token_check`,
			headers: {
				Authorization: `bearer ${localStorage.floridiversToken}`,
			},
		})
			.then((response) => {
				if (response.status && response.status === 200) {
					console.log('checking user', response);
					return 1;
					// _.set(response, 'data.user', true);
				}
			})
			.catch((error) => console.log(error));
	}
	return false;
};

const initialState = {
	api: 'https://www.floridivers.com:8600',
	url: 'https://www.floridivers.com',
	// api: 'http://localhost:8600',
	// url: 'http://www.floridivers.com',
	activeModules: {
		ADMIN: false,
		LEARN: false,
	},
};

if (_.isEqual(_.get(initialState, 'activeModules.ADMIN'), true)) {
	//_.set(initialState, "url", "http://localhost:8600/");
}

const Config = (state = initialState, config) => {
	switch (config.type) {
		case 'Admin_Login':
			return {
				...state,
				activeModules: {
					ADMIN: true,
				},
			};
		case 'Set_Config':
			return {
				...config.data,
				activeModules: {
					ADMIN: true,
				},
			};
		default:
			return state;
	}
};

export default Config;
