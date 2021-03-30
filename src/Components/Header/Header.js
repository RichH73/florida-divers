import React, { Component } from 'react';
import './Header.css';
// import SideDrawer from '../mobileMenu/sideDrawer';
// import Backdrop from '../Backdrop/Backdrop';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import Subscribe from '../Helpers/Subscribe';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

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
		// let backdrop;
		// let sideDrawer;

		// if (this.state.sideDrawerOpen) {
		// 	backdrop = <Backdrop click={this.backdropClickHandler} />;
		// 	sideDrawer = <SideDrawer />;
		// }

		const logo = (
			<React.Fragment>
				<Link to="/">
					<span
						style={{
							color: 'orange',
							fontSize: '1em',
							fontWeight: 'bold',
						}}>
						Flori
					</span>
					<span style={{ color: '#9DBFE6', fontSize: '1em', fontWeight: 'bold' }}>Divers</span>
				</Link>
			</React.Fragment>
		);
		return (
			<React.Fragment>
				<div style={{ width: '100%', display: 'flex', margin: 'auto', justifyContent: 'space-between' }}>
					<div className="header-logo">
						<img src="images/small-trans-fldv-logo.png" alt="logo" />
					</div>
					<div>{window.innerWidth > 601 ? <Subscribe history={this.props.history} /> : ''}</div>
				</div>
				<Navbar variant="dark" expand="sm" style={{ backgroundColor: '#135485' }}>
					<Navbar.Brand>{logo}</Navbar.Brand>
					<Nav>
						{!!this.props.modules.ADMIN ? (
							<LinkContainer to="/admin">
								<Nav.Link>Admin</Nav.Link>
							</LinkContainer>
						) : (
							''
						)}
						{/* <LinkContainer to="/">
							<Nav.Link>{logo}</Nav.Link>
						</LinkContainer> */}
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/crew">
							<Nav.Link>Crew</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/gallery">
							<Nav.Link>Gallery</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/learn">
							<Nav.Link>Learn</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/calendar">
							<Nav.Link>Calendar</Nav.Link>
						</LinkContainer>
					</Nav>
				</Navbar>
			</React.Fragment>
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

/*

        <div>
          <div className="header-top">
            <div className="header-logo">
              <img src="images/small-trans-fldv-logo.png" alt="logo" />
            </div>
            {window.innerWidth > 601 ? (
              <Subscribe history={this.props.history} />
            ) : (
              ""
            )}
          </div>
          <div className="header">
            <div id="label">
              <span
                style={{
                  color: "orange",
                  fontSize: "2em",
                  fontWeight: "bold",
                  marginLeft: "3em",
                }}
              >
                Flori
              </span>
              <span
                style={{
                  color: "#9DBFE6",
                  fontSize: "2em",
                  fontWeight: "bold",
                }}
              >
                Divers
              </span>
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
                    ""
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
          </div>
        </div>





*/
