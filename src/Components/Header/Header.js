import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import SideDrawer from '../mobileMenu/sideDrawer';
import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import Subscribe from '../Helpers/Subscribe';

class Header extends Component {
	state = {
		sideDrawerOpen: false,
	};

	drawerToggleClickHandler = () => {
		this.setState((prevState) => {
			return { sideDrawerOpen: !prevState.sideDrawerOpen };
		});
	};

	backdropClickHandler = () => {
		this.setState({ sideDrawerOpen: false });
	};

	render() {
		let backdrop;
		let sideDrawer;

		if (this.state.sideDrawerOpen) {
			backdrop = <Backdrop click={this.backdropClickHandler} />;
			sideDrawer = <SideDrawer />;
		}
		return (
			<div>
				<div className="header-top">
					<div className="header-logo">
						<img src="images/small-trans-fldv-logo.png" alt="logo" />
						{/* <img src="images/transparent_logo.png" alt="logo" /> */}
					</div>
					<Subscribe history={this.props.history} />
				</div>
				<div className="header">
					{/* <div id="header"> */}
					<div id="label">
						<span style={{ color: 'orange', fontSize: '2em', fontWeight: 'bold', marginLeft: '3em' }}>Flori</span>
						<span style={{ color: '#9DBFE6', fontSize: '2em', fontWeight: 'bold' }}>Divers</span>
						{/* <img src="/images/label.png" alt="label" /> */}
						{sideDrawer}
						{backdrop}
						<div id="nav-button" onClick={this.drawerToggleClickHandler}>
							<img src="images/hamburger_button.png" alt="nav" />
						</div>
					</div>

					<div id="nav">
						<nav id="navigation-bar">
							<ul>
								{!!this.props.modules.ADMIN ? (
									<li>
										<Link to="/admin">Admin</Link>
									</li>
								) : (
									''
								)}
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/about">About</Link>
								</li>
								<li>
									<Link to="/contact">Contact</Link>
								</li>
								<li>
									<Link to="/crew">Crew</Link>
								</li>
								<li>
									<Link to="/gallery-index">Gallery</Link>
								</li>
								<li>
									<Link to="/learn">Learn</Link>
								</li>
								<li>
									<Link to="/Calendar">Calendar</Link>
								</li>
							</ul>
						</nav>
					</div>
					{/* </div> */}
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	modules: state.Config.activeModules,
	//admin: state.Config.activeModules.ADMIN
	userLoggedIn: state.userInfo.user,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
