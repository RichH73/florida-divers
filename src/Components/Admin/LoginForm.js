import React, { Component } from "react";
import axios from "axios";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  onChangeHandler = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onSubmitHandler = () => {
    axios({
      method: "post",
      url: `${this.props.serverURL}login`,
      data: {
        username: this.state.username,
        password: this.state.password,
      },
    }).then((response) => {
      if (_.isEqual(response.status, 200)) {
        localStorage.setItem("floridiversToken", response.data.token);
        _.set(response, "data.user", true);
        this.props.userCheck(response.data.user);
        //this.props.history.push('/')
      }
    });
  };

  render() {
    return (
      <div style={{ margin: "auto", textAlign: "center" }}>
        Please login to continue.
        <div>
          <div>
            <div>
              <label>Username: </label>
              <input
                type="text"
                name="username"
                autoComplete="off"
                placeholder="Username"
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
          <div>
            <div>
              <label>Password: </label>
              <input
                type="password"
                name="password"
                autoComplete="off"
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
          <button onClick={this.onSubmitHandler}>Login</button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.adminPanel.panel,
  text: state.richText.text,
  serverURL: state.Config.url,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
