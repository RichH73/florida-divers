import React, { Component } from "react";
import "./Learn.css";
import axios from "axios";
import _ from "lodash";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../../actions/index";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";

class Learn extends Component {
  componentDidMount() {
    axios({
      method: "get",
      url: "http://floridivers.com:8600/learning",
      //url: "http://localhost:8600/learning",
    }).then((response) => {
      this.props.learningPackageData(response.data);
    });
  }

  divePackageInfo = () => {
    return this.props.packagesPrices.map((pack) => (
      <div className="learn-dive-package-info">
        <div className="learn-dive-package-info-title">{pack.title}</div>
        {ReactHtmlParser(pack.description)}
        <div className="learn-package-price">
          Course Price (per student): ${pack.price}
        </div>
        <a href={pack.link} target="new">
          {pack.linkText}
        </a>
      </div>
    ));
  };

  render() {
    const { packagesPrices } = this.props;
    return (
      <div className="learn">
        <h2>Ready to take the next step?</h2>
        <p>CERTIFICATION’S AVAILABLE ARE AS FOLLOWS:</p>

        <ul>
          <li>Open Water: $300</li>
          <li>Advanced Open Water: $250</li>
          <li>SPECIALTY COURSES: $250</li>
          <li>U/W Navigator Sidemount Diver: $300</li>
          <li>Dry suit Diver: $300</li>
          <li>EFR/Rescue Diver: $475</li>
          <li>Public Safety Diver: $600</li>
          <li>Dive master: $600</li>
        </ul>

        <this.divePackageInfo />

        <p>
          If you would like more information about a course, or if you are ready
          to get started please contact us.
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
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
