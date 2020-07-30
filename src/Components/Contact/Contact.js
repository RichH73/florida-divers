import React, { Component } from 'react';
import './Contact.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import axios from 'axios';
import _ from 'lodash';
import ReactGA from 'react-ga';
import Subscribe from '../Helpers/Subscribe';
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
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/contact`,
			headers: {
				something: 'some headers',
			},
			data: this.props.submissionFormData,
		}).then((response) => {
			if (_.isEqual(response.status, 200)) {
				this.props.history.push('/');
			}
		});
	};

	render() {
		return (
			<div>
				<h3>Contact Us</h3>
				<div className="contact-us-container">
					<div className="contact">
						<h3>Contact Info</h3>
						(352)448-0028
						<br />
						<a href="mailto:scubaJ1210@floridivers.com">scubaJ1210@floridivers.com</a>
						<h4>Nicholas</h4>
						<a href="mailto:scubaJ1210@floridivers.com">scubaJ1210@floridivers.com</a>
						<h4>Tammy</h4>
						<a href="mailto:Scubydoo1210@floridivers.com">Scubydoo1210@floridivers.com</a>
						<h3>Hours</h3>
						Mon-Fri: 2:30pm - 7:30pm
						<br />
						Sat: 9:00am -5:00 pm
						<br />
						Sun: Closed
						<div className="social-media">
							<h3>Social Media</h3>
							<a href="https://facebook.com/scubaforthesoul" target="new">
								<img src="https://www.floridivers.com/images/icons/fb.png" alt="FaceBook" />
							</a>
							<a href="https://www.instagram.com/floridivers/" target="new">
								<img src="https://www.floridivers.com/images/icons/inst.png" alt="Instagram" />
							</a>
							<a href="https://www.youtube.com/channel/UC57qQD8U-ZGDKAbzFjllJ4A" target="new">
								<img src="https://www.floridivers.com/images/icons/youtube.png" alt="YouTube" />
							</a>
						</div>
					</div>
					<div className="contact-us-form">
						<p>Please fill out the form below then click the send button.</p>
						<div className="input">
							<label>Name: </label>
							<input type="text" name="name" onChange={this.onChangeHandler} />
						</div>
						<div className="input">
							<label>Email: </label>
							<input type="text" name="email" onChange={this.onChangeHandler} />
						</div>
						<div className="input">
							<label>Phone: </label>
							<input type="text" name="phone" onChange={this.onChangeHandler} />
						</div>
						<label>Note</label>
						<div className="input-textarea">
							<textarea name="note" onChange={this.onChangeHandler}></textarea>
						</div>
						<div className="contact-us-form-button">
							<button onClick={this.onSubmitHandler}>Send</button>
						</div>
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
