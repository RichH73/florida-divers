import React, { Component } from "react";
import "./Learn.css";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";
import ReactHtmlParser from "react-html-parser"; // htmlparser2, // convertNodeToElement, // processNodes,
import { Link } from "react-router-dom";
class Learn extends Component {
  componentDidMount() {
    axios({
      method: "get",
      url: `${this.props.serverURL}learning`,
    }).then((response) => {
      this.props.updateLearningPackageData(response.data);
    });
  }

  divePackageInfo = () => {
    return this.props.packagesPrices.map((pack) => (
      <div className="learn-dive-package-info">
        <div className="learn-dive-package-info-title">{pack.title}</div>
        <div className="learn-dive-package-info-body">
          {ReactHtmlParser(pack.description)}
          <div className="learn-package-price">
            Course Price (per student): ${pack.price}
          </div>
          <a href={pack.link} target="new">
            {pack.linkText}
          </a>
        </div>
      </div>
    ));
  };

  render() {
    // const { packagesPrices } = this.props;
    return (
      <div className="learn">
        <h2>Ready to take the next step?</h2>
        <p>CERTIFICATION’S AVAILABLE ARE AS FOLLOWS:</p>

        <this.divePackageInfo />

        <p>
          If you would like more information about a course, or if you are ready
          to get started please <Link to="/contact">contact us</Link>.
        </p>
        <h3>We look forward to diving with you soon!!</h3>
        <div dangerouslySetInnerHTML={{ __html: this.props.text }}></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  packagesPrices: state.learningPackages.packages,
  text: state.richText.text,
  serverURL: state.Config.url,
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
