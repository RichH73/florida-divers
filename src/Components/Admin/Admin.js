import React, { Component } from 'react';
import './Admin.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import _ from 'lodash';
import LearnForm from './Learn/LearnForm';
import Login from './LoginForm';
import NewsLetter from './NewsLetter/NewsLetter';
import Gallery from './Gallery/Gallery';
import StudentAdd from './Students/StudentAdd';

class Admin extends Component {
	state = {
		username: '',
		password: '',
	};
	componentDidMount() {
		if (!!localStorage.floridiversToken) {
			this.props.checkForUserToken();
		}
	}

	clickHandler = (event) => {};

	changePanel = (event) => {
		this.props.changeAdminPanel(event.target.id);
	};

	learnPanel = () => {
		return <LearnForm />;
	};

	adminWelcome = () => {};

	adminHeader = () => {
		const navigation = () => {
			switch (this.props.page) {
				case 'welcome':
					return this.adminWelcome();
				case 'gallery':
					return <Gallery history={this.props.history} />;
				case 'letter':
					return <NewsLetter history={this.props.history} />;
				case 'learn':
					return <LearnForm history={this.props.history} />;
				case 'student-add':
					return <StudentAdd history={this.props.history} />;
				default:
					return this.adminWelcome();
			}
		};
		return (
			<React.Fragment>
				<div className="edit-header">
					<ul>
						<li id="learn" onClick={this.changePanel}>
							Learn
						</li>
						<li id="gallery" onClick={this.changePanel}>
							Gallery
						</li>
						<li id="letter" onClick={this.changePanel}>
							News Letter
						</li>
						<li id="student-add" onClick={this.changePanel}>
							Add Student
						</li>
					</ul>
				</div>
				<div className="edit-panel-main-body">{navigation()}</div>
			</React.Fragment>
		);
	};

	adminWelcome = () => {
		return <div style={{ textAlign: 'center' }}>Welcome!</div>;
	};

	navigation = () => {
		switch (this.props.page) {
			case 'welcome':
				return this.adminWelcome();
			case 'gallery':
				return this.galleryPanel();
			case 'letter':
				return <NewsLetter />;
			case 'learn':
				return <LearnForm history={this.props.history} />;
			default:
				return this.adminWelcome();
		}
	};

	render() {
		const { loggedUser } = this.props;
		return (
			<div className="edit-panel-main-body1">{_.isEqual(loggedUser, false) ? <Login history={this.props.history} /> : <this.adminHeader />}</div>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.adminPanel.panel,
	text: state.richText.text,
	userInfo: state.userInfo,
	loggedUser: state.userInfo.user,
	siteURL: state.Config.url,
	siteAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
