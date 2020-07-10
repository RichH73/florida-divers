import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../../actions/index";

class DivePackages extends Component {
  componentWillUnmount() {
    this.props.clearRichText();
    this.props.clearnLearnForm();
  }

  onClickHandler = (id) => {
    // let packageData = this.props.packagesPrices.filter((course) => {
    //   _.isEqual(course._id, id);
    //   // title: "",
    //   // price: "",
    //   // link: "",
    //   // linkText: "",
    // });
    this.props.loadPackageData(id);
    this.props.editText({ text: id.description });
  };

  onChangeHandler = (event) => {
    this.props.newPackageFormData([event.target.name], event.target.value);
  };

  //   onSubmitHandler = (event) => {
  //     event.preventDefault();
  //     const { title, description, price, link, linkText } = this.props
  //     axios({
  //       method: "post",
  //       // url: "http://floridivers.com:8600/learn/createNewPackage",
  //       url: "http://floridivers.com:8600/learn/createNewPackage",
  //       data: {
  //         title: title,
  //         description: description,
  //         price: price,
  //         link: link,
  //         linkText: linkText
  //       },
  //     })
  //     .then((response) => {
  //       if(_.isEqual(response.status, 200)) {
  //         this.props.clearRichText()
  //         this.props.clearnLearnForm()
  //         this.props.history.push('/learn')
  //       }
  //     })
  //   };

  sortPackageData = () => {
    return this.props.packagesPrices.map((course) => (
      <div className="admin-form-edit-dive-packages">
        <div
          className="admin-form-edit-dive-package"
          onClick={() => this.onClickHandler(course)}
        >
          <div>{course._id}</div>
          <div>{course.title}</div>
          <div>{course.price}</div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div className="admin-learn-form">
        <this.sortPackageData />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  packagesPrices: state.learningPackages.packages,
  description: state.richText.text,
  title: state.createNewPackage.title,
  price: state.createNewPackage.price,
  link: state.createNewPackage.link,
  linkText: state.createNewPackage.linkText,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(DivePackages);
