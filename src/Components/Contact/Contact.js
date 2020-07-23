import React, { Component } from 'react';
import './Contact.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import axios from 'axios';
import _ from 'lodash';
class Contact extends Component {
	onChangeHandler = (event) => {
		this.props.contactForm({
			[event.target.name]: event.target.value,
		});
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		axios({
			method: 'post',
			url: `${this.props.serverURL}contact/newContact`,
			headers: {
				something: 'some headers',
			},
			data: this.props.submissionFormData,
		}).then((response) => {
			if (_.isEqual(response.status, 200)) {
				this.props.history.push('/contact');
			}
		});
	};

	render() {
		return (
			<div className="contact-us-container">
				<div className="contact">
					<h3>Contact</h3>
					(352)448-0028
					<br />
					<a href="mailto:scubaJ1210@floridivers.com">scubaJ1210@floridivers.com</a>
					<h4>Nicholas</h4>
					<a href="mailto:scubaJ1210@floridivers.com">scubaJ1210@floridivers.com</a>
					<h4>Tammy</h4>
					<a href="mailto:tjstrazzulla@yahoo.com">tjstrazzulla@yahoo.com</a>
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
						<a href="https://twitter.com/@scubaforthesoul" target="new">
							<img src="https://www.floridivers.com/images/icons/twitter.png" alt="Twitter" />
						</a>
						<a href="https://www.instagram.com/explore/tags/scubaforthesoul/" target="new">
							<img src="https://www.floridivers.com/images/icons/inst.png" alt="Instagram" />
						</a>
						<a href="https://www.youtube.com/channel/UC57qQD8U-ZGDKAbzFjllJ4A" target="new">
							<img src="https://www.floridivers.com/images/icons/youtube.png" alt="YouTube" />
						</a>
					</div>
				</div>
				<div className="contact-us-form">
					<label>Name</label>
					<div className="input">
						<input type="text" name="name" onChange={this.onChangeHandler} />
					</div>
					<label>Email</label>
					<div className="input">
						<input type="text" name="email" onChange={this.onChangeHandler} />
					</div>
					<label>Phone</label>
					<div className="input">
						<input type="text" name="phone" onChange={this.onChangeHandler} />
					</div>
					<label>Note</label>
					<div className="input">
						<textarea name="note" onChange={this.onChangeHandler}></textarea>
					</div>
					<div className="contact-us-form-button">
						<button onClick={this.onSubmitHandler}>Send</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	submissionFormData: state.submissionForm,
	serverURL: state.Config.url,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
