import React, { Component } from 'react';
import './NewsLetter.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions/index';
import TextEditor from '../../Helpers/TextEditor';
import Modal from 'react-modal';
class NewsLetter extends Component {
	state = {
		isOpen: false,
	};
	onSubmitHandler = () => {
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/newsLetter`,
			data: {
				html: this.props.text,
				name: 'Rich',
				subject: 'Monthly News Letter',
			},
		}).then((response) => {
			this.setState({ isOpen: true });
			this.props.clearRichText();
			//this.props.history.push('/admin')
		});
	};
	closeModal = () => {
		this.setState({ isOpen: false });
	};
	render() {
		const customStyles = {
			content: {
				top: '50%',
				left: '50%',
				right: 'auto',
				bottom: 'auto',
				marginRight: '-50%',
				transform: 'translate(-50%, -50%)',
			},
		};
		return (
			<div className="edit-newsletter-form">
				<p>You can use this form to edit the newsletter directly or copy text from another program (ie Word), and paste here.</p>
				<p>
					Once you have the newsletter formatted and ready to send, click the send button at the bottom and it will be sent out to all registered
					email addresses.
				</p>
				<TextEditor />
				<button onClick={this.onSubmitHandler}>Send</button>
				<Modal
					isOpen={this.state.isOpen}
					//onAfterOpen={afterOpenModal()}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
					className="Modal">
					<h3>Success!</h3>
					<p>News Letter has been sent.</p>
					<div className="menu-header hbox vcenter" onClick={this.closeModal}>
						<button>Ok</button>
					</div>
				</Modal>
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
