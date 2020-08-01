import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import ReactHtmlParser from 'react-html-parser';

class PastStudents extends Component {
	render() {
		return (
			<div className="learn-past-students">
				<div className="learn-past-students-title">Some of our past students!</div>
				<div className="learn-past-students-list">
					{this.props.pastStudents.map((student) => (
						<div>
							{student.name} - {student.certification}
						</div>
					))}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	text: state.richText.text,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	pastStudents: state.learningPackages.students,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PastStudents);
