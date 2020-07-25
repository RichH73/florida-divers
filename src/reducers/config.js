const _ = require('lodash');

const initialState = {
	api: 'https://www.floridivers.com:8600',
	url: 'https://www.floridivers.com',
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
		case 'Set_Config':
			return {
				...config.data,
			};
		default:
			return state;
	}
};

export default Config;
