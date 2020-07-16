const initial_state = {
	display: 'none',
};

const spinner = (state = initial_state, display) => {
	switch (display.type) {
		case 'show':
			return {
				display: 'block',
			};
		case 'hide':
			return {
				display: 'none',
			};
		default:
			return state;
	}
};

export default spinner;
