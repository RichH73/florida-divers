import React, { Component } from "react";
import TextEditor from "../../Helpers/TextEditor";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";
import _ from "lodash";
import DivePackages from "./DivePackages";

class LeanrForm extends Component {
  componentWillUnmount() {
    this.props.clearRichText();
    this.props.clearnLearnForm();
  }
  onChangeHandler = (event) => {
    this.props.newPackageFormData([event.target.name], event.target.value);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    const {
      _id,
      title,
      description,
      price,
      link,
      linkText,
    } = this.props.courseData;
    axios({
      method: "post",
      // url: "http://floridivers.com:8600/learn/createNewPackage",
      url: "http://localhost:8600/learn/createNewPackage",
      data: {
        _id: _id,
        title: title,
        description: this.props.description,
        price: price,
        link: link,
        linkText: linkText,
      },
    }).then((response) => {
      if (_.isEqual(response.status, 200)) {
        this.props.clearRichText();
        this.props.clearnLearnForm();
        this.props.history.push("/learn");
      }
    });
  };

  render() {
    const {
      _id,
      title,
      description,
      price,
      link,
      linkText,
    } = this.props.courseData;
    return (
      <div className="admin-learn-form">
        <p>Create a new dive package by filling out the form below.</p>
        <div className="admin-learn-form-element">
          <label>Title</label>
          <div className="admin-learn-form-input-field">
            <input
              type="text"
              name="title"
              onChange={this.onChangeHandler}
              value={title}
            />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Description</label>
          <div>
            <TextEditor description={description} />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Price</label>
          <div className="admin-learn-form-input-field">
            <input
              type="text"
              name="price"
              onChange={this.onChangeHandler}
              value={price}
            />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Link</label>
          <div className="admin-learn-form-input-field">
            <input
              type="text"
              name="link"
              onChange={this.onChangeHandler}
              value={link}
            />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Link Text</label>
          <div className="admin-learn-form-input-field">
            <input
              type="text"
              name="linkText"
              onChange={this.onChangeHandler}
              value={linkText}
            />
          </div>
        </div>
        <button onClick={this.onSubmitHandler}>Submit</button>
        <div className="admin-form-edit-dive-packages">
          <DivePackages />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  packagesPrices: state.learningPackages.packages,
  courseData: state.createNewPackage,
  description: state.richText.text,
  title: state.createNewPackage.title,
  price: state.createNewPackage.price,
  link: state.createNewPackage.link,
  linkText: state.createNewPackage.linkText,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LeanrForm);
