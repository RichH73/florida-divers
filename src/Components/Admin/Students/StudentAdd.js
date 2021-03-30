import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import './Students.css';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';

const studentNameRef = React.createRef();
const studentCertificationRef = React.createRef();

class StudentAdd extends Component {
	initialState = {};
	state = {
		show: false,
		deleteWarn: false,
	};

	componentDidMount() {
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/admin/student_data`,
			headers: {
				Authorization: `bearer ${localStorage.floridiversToken}`,
			},
		}).then((response) => {
			this.props.getStudentRecords(response.data);
			//this.props.updateLearningPackageData(response.data);
		});
	}

	clearStudentEditForm = () => {
		this.props.studentData({
			_id: '',
			firstName: '',
			lastName: '',
			email: '',
			address: '',
			city: '',
			state: '',
			zipCode: '',
			phone: '',
			certification: '',
			certificationLevel: '',
			certificationDate: '',
			displayStudent: false,
		});
	};

	deleteModalClose = () => {
		this.setState({ deleteWarn: false });
		this.clearStudentEditForm();
	};

	deleteModalOpen = () => {
		this.setState({
			deleteWarn: true,
			show: false,
		});
	};

	deleteModal = () => {
		return (
			<Modal show={this.state.deleteWarn}>
				<Modal.Header closeButton>
					<Modal.Title>Delete Student!</Modal.Title>
				</Modal.Header>

				<Modal.Body>
					<p>Are you sure you would like to delete this student?</p>
					{this.props.student.firstName} {this.props.student.lastName}
				</Modal.Body>

				<Modal.Footer>
					<Button variant="success" onClick={this.deleteModalClose}>
						Cancel
					</Button>
					<Button variant="danger" onClick={this.deleteStudent}>
						Delete
					</Button>
				</Modal.Footer>
			</Modal>
		);
	};

	deleteStudent = () => {
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/admin/delete-student`,
			headers: {
				Authorization: `Bearer ${localStorage.floridiversToken}`,
			},
			data: {
				studentId: this.props.student._id,
				// name: this.state.studentName,
				// certification: this.state.studentCertification,
			},
		}).then((response) => {
			if (response.status === 200) {
				this.props.getStudentRecords(response.data);
				this.deleteModalClose();
			}
		});
	};

	saveStudentData = () => {
		const student = this.props.student;

		if (!!student._id) {
			axios({
				method: 'post',
				url: `${this.props.serverAPI}/admin/student-update`,
				headers: {
					Authorization: `Bearer ${localStorage.floridiversToken}`,
				},
				data: {
					student: {
						_id: student._id,
						update: {
							firstName: student.firstName,
							lastName: student.lastName,
							email: student.email,
							address: student.address,
							city: student.city,
							state: student.state,
							zipCode: student.zipCode,
							phone: student.phone,
							certification: student.certification,
							certificationLevel: student.certificationLevel,
							certificationDate: student.certificationDate,
							displayStudent: student.displayStudent,
						},
					},
				},
			}).then((response) => {
				if (response.status === 200) {
					this.clearStudentEditForm();
					this.props.getStudentRecords(response.data);
					this.handleClose();
				}
			});
		}

		if (!student._id) {
			axios({
				method: 'post',
				url: `${this.props.serverAPI}/admin/add-new-student`,
				headers: {
					Authorization: `Bearer ${localStorage.floridiversToken}`,
				},
				data: student,
			}).then((response) => {
				if (response.status === 200) {
					this.clearStudentEditForm();
					this.props.getStudentRecords(response.data);
					this.handleClose();
				}
			});
		}
	};

	editStudentChange = (event) => {
		const id = event.target.name.split('_')[1];
		this.props.studentEdit(id, [event.target.name.split('_')[0]], event.target.value);
	};

	handleClose = () => {
		this.setState({
			show: false,
		});
		this.clearStudentEditForm();
	};
	handdleOpen = () => {
		this.setState({
			show: true,
		});
	};

	studentedit = (student) => {
		this.setState({
			show: true,
		});
		this.props.studentData(student);
	};

	divePackages = () => {
		const filterPackages = ['SPECIALTY COURSES'];
		return this.props.divePackages
			.filter((pack) => {
				if (!filterPackages.includes(pack.title)) {
					return pack;
				}
			})
			.map((pack) => <option>{pack.title}</option>);
	};

	// displayStudentChecked = () => {
	// 	if (!!this.props.student.displayStudent) {
	// 		return true;
	// 	}
	// 	return false;
	// };

	toggleDisplayStudent = (event) => {
		const id = event.target.name.split('_')[1];
		if (!!this.props.student.displayStudent) {
			this.props.studentEdit(id, [event.target.name.split('_')[0]], false);
		}
		if (!this.props.student.displayStudent) {
			this.props.studentEdit(id, [event.target.name.split('_')[0]], true);
		}
	};

	render() {
		const { pastStudents } = this.props;
		return (
			<React.Fragment>
				<div className="add-new-student">
					You can <span onClick={this.handdleOpen}>Add a new student here</span> or edit an existing student by selecting one from the table below
				</div>
				<div className="add-students-form">
					<div className="student-table">
						<Table striped bordered hover size="sm">
							<thead>
								<tr>
									<th>First Name</th>
									<th>Last Name</th>
									<th>Certification</th>
								</tr>
							</thead>
							{pastStudents.map((student) => (
								<tbody>
									<tr onClick={() => this.studentedit(student)}>
										<td>{student.firstName}</td>
										<td>{student.lastName}</td>
										<td>{student.certificationLevel}</td>
									</tr>
								</tbody>
							))}
						</Table>
					</div>

					<Modal show={this.state.show} onHide={this.handleClose}>
						<Modal.Header closeButton>
							<Modal.Title>Edit Student</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<Form>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>First Name</Form.Label>
											<Form.Control type="text" name="firstName" value={this.props.student.firstName} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Label>Last Name</Form.Label>
											<Form.Control type="text" name="lastName" value={this.props.student.lastName} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Email Address</Form.Label>
											<Form.Control type="email" name="email" value={this.props.student.email} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Address</Form.Label>
											<Form.Control type="text" name="address" value={this.props.student.address} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>City</Form.Label>
											<Form.Control type="text" name="city" value={this.props.student.city} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Label>State</Form.Label>
											<Form.Control as="select" name="state" value={this.props.student.state} onChange={this.editStudentChange}>
												<option></option>
												{this.props.states.map((state) => (
													<option value={state.value}>{state.label}</option>
												))}
											</Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Label>Zip Code</Form.Label>
											<Form.Control type="text" name="zipCode" value={this.props.student.zipCode} onChange={this.editStudentChange} />
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<Form.Group>
											<Form.Label>Certification Level</Form.Label>
											<Form.Control
												as="select"
												name="certificationLevel"
												value={this.props.student.certificationLevel}
												onChange={this.editStudentChange}>
												<option></option>
												{this.divePackages()}
											</Form.Control>
										</Form.Group>
									</Col>
									<Col>
										<Form.Group>
											<Form.Label>Certification Date</Form.Label>
											<Form.Control
												type="date"
												name="certificationDate"
												value={this.props.student.certificationDate}
												onChange={this.editStudentChange}
											/>
										</Form.Group>
									</Col>
								</Form.Row>
								<Form.Row>
									<Col>
										<Form.Check
											required
											checked={this.props.student.displayStudent}
											//checked={this.displayStudentChecked()}
											name="displayStudent"
											label="Display this student?"
											onChange={this.toggleDisplayStudent}
										/>
									</Col>
								</Form.Row>
							</Form>
						</Modal.Body>
						<Modal.Footer>
							<Button variant="secondary" onClick={this.handleClose}>
								Cancel
							</Button>
							<Button variant="danger" onClick={this.deleteModalOpen}>
								Delete
							</Button>
							<Button variant="success" onClick={this.saveStudentData}>
								Save
							</Button>
						</Modal.Footer>
					</Modal>
					{this.deleteModal()}
				</div>
			</React.Fragment>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	divePackages: state.learningPackages.packages,
	courseData: state.createNewPackage,
	description: state.richText.text,
	title: state.createNewPackage.title,
	price: state.createNewPackage.price,
	link: state.createNewPackage.link,
	linkText: state.createNewPackage.linkText,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	pastStudents: state.studentRecords.studentData,
	studentRecords: state.studentRecords.studentData,
	student: state.editStudent,
	states: state.states,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(StudentAdd);
