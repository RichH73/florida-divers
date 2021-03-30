import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class Login extends Component {
	state = {
		username: '',
		password: '',
	};

	onChangeHandler = (event) => {
		event.preventDefault();
		this.setState({ [event.target.name]: event.target.value });
	};

	onSubmitHandler = () => {
		axios({
			method: 'post',
			url: `${this.props.serverAPI}/login`,
			data: {
				username: this.state.username,
				password: this.state.password,
			},
		}).then((response) => {
			if (_.isEqual(response.status, 200)) {
				localStorage.setItem('floridiversToken', response.data.token);
				_.set(response, 'data.user', true);
				this.props.userCheck(response.data.user);
				this.props.adminLogged();
				//this.props.history.push('/')
			}
		});
	};

	render() {
		return (
			<div style={{ margin: 'auto', width: '220px', border: '1px solid lightgrey', padding: '10px' }}>
				<Form>
					<Form.Row>
						<Form.Group>
							<Form.Label>Username</Form.Label>
							<Form.Control type="text" name="username" autoComplete="off" placeholder="Username" onChange={this.onChangeHandler} size="sm" />
						</Form.Group>
					</Form.Row>

					<Form.Row>
						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" name="password" autoComplete="off" onChange={this.onChangeHandler} size="sm" />
						</Form.Group>
					</Form.Row>
				</Form>
				<Button onClick={this.onSubmitHandler} size="sm">
					Login
				</Button>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.adminPanel.panel,
	text: state.richText.text,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
