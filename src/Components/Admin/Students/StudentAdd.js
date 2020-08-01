import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import './Students.css';
import _ from 'lodash';

const studentNameRef = React.createRef();
const studentCertificationRef = React.createRef();

class StudentAdd extends Component {
	state = {
		sutdentName: '',
		studentCertification: '',
	};

	onChangeHandler = (event) => {
		this.setState({
			[event.target.name]: event.target.value,
		});
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/learn/addStudent`,
			data: {
				name: this.state.studentName,
				certification: this.state.studentCertification,
			},
		}).then((response) => {
			studentNameRef.current.value = '';
			studentCertificationRef.current.value = '';
			this.props.addNewStudent({
				name: this.state.studentName,
				certification: this.state.studentCertification,
			});
		});
	};

	changeTest = (event) => {
		event.preventDefault();
		studentNameRef.current.value = '';
		studentCertificationRef.current.value = '';
	};

	render() {
		const { pastStudents } = this.props;
		return (
			<div className="add-students-form">
				<h3>Add a new student</h3>
				<div style={{ margin: 'auto' }}>
					<div className="student-add-form">
						<div className="student-add-box">
							<label>Name: </label>
							<input type="text" name="studentName" ref={studentNameRef} onChange={this.onChangeHandler} />
						</div>
						<div>
							<label>Certification: </label>
							<input type="text" name="studentCertification" ref={studentCertificationRef} onChange={this.onChangeHandler} />
							<button onClick={this.onSubmitHandler}>click</button>
						</div>
					</div>
				</div>
				<div>
					<h3>Current Students</h3>
				</div>
				{pastStudents.map((student) => (
					<div>
						{student.name} - {student.certification}
					</div>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	courseData: state.createNewPackage,
	description: state.richText.text,
	title: state.createNewPackage.title,
	price: state.createNewPackage.price,
	link: state.createNewPackage.link,
	linkText: state.createNewPackage.linkText,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	pastStudents: state.learningPackages.students,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd);
