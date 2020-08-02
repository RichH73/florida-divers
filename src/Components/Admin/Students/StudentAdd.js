import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import './Students.css';
import _ from 'lodash';
import { resetCalls } from 'react-ga';

const studentNameRef = React.createRef();
const studentCertificationRef = React.createRef();

class StudentAdd extends Component {
	initialState = {};
	state = {};

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

	editStudentChange = (event) => {
		const id = event.target.name.split('_')[1];
		// this.setState({
		// })
		// console.log('this id is ', id)
		// console.log({[event.target.name.split('_')[0]]: event.target.value})
		this.props.studentEdit(id, [event.target.name.split('_')[0]], event.target.value);
	};
	editStudentClick = (student) => {
		const { _id, firstName, lastName, certification } = this.props.student;
		axios({
			url: 'http://localhost:8600/learn/student-update',
			method: 'post',
			data: {
				studentId: _id,
				update: {
					firstName,
					lastName,
					certification,
				},
			},
		}).then(() => {
			this.props.clearStudentForm();
		});
		//console.log(this.state)
		// return (
		// 	<React.Fragment>
		// 		<input type='hidden' value={student._id} />
		// 		<input type='text' placeholder={student.firstName} />
		// 		<input type='text' placeholder={student.lastName} />
		// 		<input type='text' placeholder={student.certification} />
		// 	</React.Fragment>
		// )
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
					<div className="edit-student-field">
						<input type="hidden" value={student._id} />
						<input type="text" placeholder={student.firstName} name={`firstName_${student._id}`} onChange={this.editStudentChange} />
						<input type="text" placeholder={student.lastName} name={`lastName_${student._id}`} onChange={this.editStudentChange} />
						<input type="text" placeholder={student.certification} name={`certification_${student._id}`} onChange={this.editStudentChange} />
						<button onClick={() => this.editStudentClick(student)}>ok</button>
					</div>
					// <div className='edit-student-data' onClick={()=> this.editStudentClick(student)}>
					// 	{`${student.firstName} ${student.lastName} ${student.certification}`}
					// </div>
				))}
				<br />
				<button onClick={this.editStudentClick}>Save Students</button>
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
	student: state.editStudent,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd);
