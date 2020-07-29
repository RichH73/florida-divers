import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import axios from 'axios';

class Subscribe extends Component {
	handleChange = (event) => {
		// console.log({
		// 	email: event.target.value
		// });
		this.props.subscribeEmail({
			email: event.target.value,
		});
	};

	componentWillUnmount() {
		this.props.clearSubscribeEmail();
	}

	subscribeSubmitHandler = () => {
		axios({
			url: `http://localhost:8600/subscribe`,
			// url: `${this.props.serverAPI}/subscribe`,
			method: 'post',
			data: {
				email: this.props.newEmail,
				signupDate: new Date(),
			},
		}).then(() => this.props.clearSubscribeEmail());
	};

	render() {
		return (
			<div className="newsletter-subscribe">
				<form>
					<p>Want to recieve our newsletter? Signup here!</p>
					<lable>Email Address: </lable>
					<input type="email" name="email" onChange={this.handleChange} required />
					<button type="submit" onClick={this.subscribeSubmitHandler}>
						Subscribe
					</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
	newEmail: state.emailSubscribe.email,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
