import React, { Component } from 'react';
import './Contact.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import axios from 'axios';
import _ from 'lodash';
import ReactGA from 'react-ga';
import fb from '../../images/fb.png';
import inst from '../../images/inst.png';
import youtube from '../../images/youtube.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NumberFormat from 'react-number-format';
import Spinner from 'react-bootstrap/Spinner';
class Contact extends Component {
	componentDidMount() {
		ReactGA.pageview('/Contact');
	}
	onChangeHandler = (event) => {
		this.props.contactForm({
			[event.target.name]: event.target.value,
		});
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		this.props.contactForm({
			sending: true,
		});
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/contact`,
			headers: {
				something: 'some headers',
			},
			data: this.props.submissionFormData,
		}).then((response) => {
			if (_.isEqual(response.status, 200)) {
				this.props.contactForm({
					sending: false,
					name: '',
					email: '',
					phone: '',
					note: '',
				});
				this.props.history.push('/');
			}
		});
	};

	render() {
		return (
			<div>
				{/* <h3>Contact Us</h3> */}
				<div className="contact-us-container">
					<div className="contact">
						<h3>Contact Info</h3>
						<div className="phone-contact">
							<p>Call us: (352) 220-1148</p>
						</div>
						<div className="email-contact">
							<a href="mailto:floridivers@gmail.com">Email: floridivers@gmail.com</a>
						</div>
						<div className="hours-contact">
							<h3>Hours</h3>
							Mon-Fri: 2:30pm - 7:30pm
							<br />
							Sat: 9:00am -5:00 pm
							<br />
							Sun: Closed
						</div>
						<div className="social-media">
							<h3>Social Media</h3>
							<a href="https://facebook.com/scubaforthesoul" target="new">
								<img src={fb} alt="FaceBook" />
							</a>
							<a href="https://www.instagram.com/floridivers/" target="new">
								<img src={inst} alt="Instagram" />
							</a>
							<a href="https://www.youtube.com/channel/UC57qQD8U-ZGDKAbzFjllJ4A" target="new">
								<img src={youtube} alt="YouTube" />
							</a>
						</div>
					</div>
					<div className="contact-us-form">
						<p>Please fill out the form below then click the send button.</p>
						<Form>
							<Form.Group size="sm">
								<Form.Label>Name</Form.Label>
								<Form.Control type="input" name="name" onChange={this.onChangeHandler} size="sm" />
							</Form.Group>
							<Form.Group size="sm">
								<Form.Label>Email Address</Form.Label>
								<Form.Control type="email" name="email" onChange={this.onChangeHandler} size="sm" />
							</Form.Group>
							<Form.Group size="sm">
								<Form.Label>Phone Number</Form.Label>
								<NumberFormat
									format="+1 (###) ###-####"
									className="textInput form-control"
									allowEmptyFormatting
									mask="_"
									//defaultValue={user.businessPhone}
									onChange={this.onChangeHandler}
									name="phone"
								/>
							</Form.Group>
							<Form.Group size="sm">
								<Form.Label>Message</Form.Label>
								<Form.Control as="textarea" name="note" onChange={this.onChangeHandler} size="sm" />
							</Form.Group>
						</Form>
						{!this.props.submissionFormData.sending ? (
							<Button onClick={this.onSubmitHandler}>Send</Button>
						) : (
							<Button variant="primary" onClick={this.onSubmitHandler} disabled>
								<Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" /> Sending...
							</Button>
						)}
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	submissionFormData: state.submissionForm,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
