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
			<div>
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
