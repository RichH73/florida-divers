import React, { Component } from 'react';
import './NewsLetter.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import TextEditor from '../../Helpers/TextEditor';

class NewsLetter extends Component {
	onSubmitHandler = () => {
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/newsLetter`,
			data: {
				html: this.props.text,
				name: 'Rich',
				subject: 'Monthly News Letter',
			},
		});
	};

	render() {
		return (
			<div className="edit-newsletter-form">
				<p>You can use this form to edit the newsletter directly or copy text from another program (ie Word), and paste here.</p>
				<p>
					Once you have the newsletter formatted and ready to send, click the send button at the bottom and it will be sent out to all registered
					email addresses.
				</p>
				<TextEditor />
				<button onClick={this.onSubmitHandler}>Send</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	text: state.richText.text,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
