import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import ReactHtmlParser from 'react-html-parser';

class PastStudents extends Component {
	render() {
		return <div className="learn-past-students">Some of our past Students</div>;
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	text: state.richText.text,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastStudents);
