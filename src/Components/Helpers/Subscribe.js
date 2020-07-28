import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';

class Subscribe extends Component {
	handleChange = (event) => {
		console.log([event.target.name], event.target.value);
		// this.props.editText({
		// 	text: value,
		// });
	};

	submitHandler = () => {
		console.log('the button was clicked');
	};

	render() {
		return (
			<div>
				<lable>Email Address</lable>
				<input type="email" name="email" onChange={this.handleChange} />
				<button onClick={this.submitHandler}>Subscribe</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Subscribe);
