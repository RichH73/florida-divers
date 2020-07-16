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

class Admin extends Component {
	state = {
		username: '',
		password: '',
	};
	componentDidMount() {
		if (localStorage.floridiversToken) {
			axios({
				method: 'post',
				url: `${this.props.siteURL}login/token_check`,
				headers: {
					Authorization: `bearer ${localStorage.floridiversToken}`,
				},
			}).then((response) => {
				if (_.isEqual(response.status, 200)) {
					_.set(response, 'data.user', true);
					this.props.userCheck(response.data);
				}
			});
		}
	}

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
					return <NewsLetter />;
				case 'learn':
					return <LearnForm history={this.props.history} />;
				default:
					return this.adminWelcome();
			}
		};
		return (
			<React.Fragment>
				<div className="admin-header">
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
					</ul>
				</div>
				<div className="admin-panel-main-body">{navigation()}</div>
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
			<div className="admin-panel-main-body1">{_.isEqual(loggedUser, false) ? <Login history={this.props.history} /> : <this.adminHeader />}</div>
		);
	}
}

const mapStateToProps = (state) => ({
	page: state.adminPanel.panel,
	text: state.richText.text,
	userInfo: state.userInfo,
	loggedUser: state.userInfo.user,
	siteURL: state.Config.url,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
