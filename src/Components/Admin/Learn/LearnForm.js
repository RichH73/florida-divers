import React, { Component } from "react";
import TextEditor from "../../Helpers/TextEditor";
import axios from "axios";
class LeanrForm extends Component {
  onChangeHandler = (event) => {
    console.log(event.target.name, event.target.value);
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="admin-learn-form">
        <p>Create a new dive package by filling out the form below.</p>
        <div className="admin-learn-form-element">
          <label>Title</label>
          <div className="admin-learn-form-input-field">
            <input type="text" name="title" onChange={this.onChangeHandler} />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Description</label>
          <div>
            <TextEditor />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Price</label>
          <div className="admin-learn-form-input-field">
            <input type="text" name="price" onChange={this.onChangeHandler} />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Link</label>
          <div className="admin-learn-form-input-field">
            <input type="text" name="link" onChange={this.onChangeHandler} />
          </div>
        </div>
        <div className="admin-learn-form-element">
          <label>Link Text</label>
          <div className="admin-learn-form-input-field">
            <input
              type="text"
              name="linkText"
              onChange={this.onChangeHandler}
            />
          </div>
        </div>
        <button>Submit</button>
      </div>
    );
  }
}

export default LeanrForm;
