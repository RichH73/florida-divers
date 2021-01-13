import React, { Component } from 'react';
import './Learn.css';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/index';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import PastStudents from './PastStudents';
import sdi_small from '../../images/sdi_small.png';
import padi_small from '../../images/padi_small.png';
class Learn extends Component {
	componentDidMount() {
		ReactGA.pageview('/Learn');
		axios({
			method: 'get',
			url: `${this.props.serverAPI}/learning`,
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
					<div className="learn-package-price">Course Price (per student): ${pack.price}</div>
					<a href={pack.link} target="new">
						{pack.linkText}
					</a>
				</div>
			</div>
		));
	};

	render() {
		return (
			<div className="learn">
				<div className="learn-inner-package-info">
					<h2>Ready to take the next step?</h2>
					<h3>We look forward to diving with you soon!!</h3>
					<p style={{ marginBottom: '2em' }}>
						If you would like more information about a course, please <Link to="/contact">contact us</Link>.
					</p>
					<div className="learn-dive-package-logos">
						<img src={sdi_small} alt={sdi_small} />
						<img src={padi_small} alt={padi_small} />
					</div>
					<p>CERTIFICATION’S AVAILABLE ARE AS FOLLOWS:</p>
				</div>
				<this.divePackageInfo />
				<PastStudents />
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	packagesPrices: state.learningPackages.packages,
	text: state.richText.text,
	serverURL: state.Config.url,
	serverAPI: state.Config.api,
});

const mapDispatchToProps = (dispatch) => {
	return bindActionCreators(actionCreators, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Learn);
