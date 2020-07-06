import React, { Component } from "react";
import "./NewsLetter.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import _ from "lodash";
import TextEditor from "../../Helpers/TextEditor";

class NewsLetter extends Component {
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

  render() {
    const token = localStorage.floridiversToken;
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
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsLetter);
