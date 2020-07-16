import React, { Component } from 'react';
import './Calendar.css';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import * as actionCreators from '../../../actions/index';
// import axios from 'axios';

//Google analytics for visitor tracking
// import ReactGA from 'react-ga';

class Calendar extends Component {
	render() {
		return (
			<div className="cal-container">
				<iframe
					title="Floridivers Calendar"
					className="google-cal"
					src="https://calendar.google.com/calendar/embed?src=scubaforthesoulclub%40gmail.com&ctz=America%2FNew_York"
				/>
			</div>
		);
	}
}

export default Calendar;
