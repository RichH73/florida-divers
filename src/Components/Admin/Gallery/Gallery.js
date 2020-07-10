import React, { Component } from "react";
import "./Gallery.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import _ from "lodash";
import TextEditor from "../../Helpers/TextEditor";
import ImageDrop from '../../Helpers/imgDrop/imgDrop'
class Gallery extends Component {
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
      <ImageDrop />
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

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
