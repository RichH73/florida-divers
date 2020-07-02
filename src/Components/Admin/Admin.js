import React, { Component } from "react";
import "./Admin.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";
import _ from "lodash";
import TextEditor from "../Helpers/TextEditor";
import LearnForm from "./Learn/LearnForm";

class Admin extends Component {
  componentDidMount() {}

  changePanel = (event) => {
    this.props.changeAdminPanel(event.target.id);
  };

  learnPanel = () => {
    return <LearnForm />;
  };

  galleryPanel = () => {
    return <div>Gallery Stuff</div>;
  };

  onSubmitHandler = () => {
    axios({
      method: "post",
      url: "http://floridivers.com:8600/newsLetter",
      data: {
        html: this.props.text,
        name: "Rich",
        subject: "Monthly News Letter",
      },
    });
  };

  newsLetterPanel = () => {
    return (
      <div>
        <TextEditor />
        <button onClick={this.onSubmitHandler}>Send</button>
      </div>
    );
  };

  adminWelcome = () => {};

  adminHeader = () => {
    return (
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
    );
  };

  adminWelcome = () => {
    return <div style={{ textAlign: "center" }}>Welcome!</div>;
  };

  navigation = () => {
    switch (this.props.page) {
      case "welcome":
        return this.adminWelcome();
      case "gallery":
        return this.galleryPanel();
      case "letter":
        return this.newsLetterPanel();
      case "learn":
        return <LearnForm />;
    }
  };

  render() {
    const { packagesPrices } = this.props;
    return (
      <div className="admin">
        <this.adminHeader />
        <div className="admin-panel-body">
          <this.navigation />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.adminPanel.panel,
  text: state.richText.text,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Admin);
