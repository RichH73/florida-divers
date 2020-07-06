import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Toolbar from "../mobileMenu/toolbar";
import SideDrawer from "../mobileMenu/sideDrawer";
import Backdrop from "../Backdrop/Backdrop";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";
import _ from "lodash";

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
    console.log("user logged", !!this.props.userLoggedIn);
    let backdrop;
    let sideDrawer;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
      sideDrawer = <SideDrawer />;
    }
    const ADMIN = _.get(this, "props.modules.ADMIN");
    console.log("modules", ADMIN);
    return (
      <div className="header">
        <div id="header">
          <div id="label">
            <img src="/images/label.png" alt="label" />
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
                  <Link to="/gallery">Gallery</Link>
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
