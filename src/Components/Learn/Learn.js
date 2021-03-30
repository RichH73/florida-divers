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
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
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
				<Accordion>
					<Card>
						<Card.Header bsPrefix={'learn-card-header'} className="learn-dive-package-info-title">
							<Accordion.Toggle as={Card.Header} variant="link" eventKey="0">
								{pack.title}
							</Accordion.Toggle>
						</Card.Header>
						<Accordion.Collapse eventKey="0">
							<Card.Body className="learn-dive-package-info-body">
								<div className="learn-dive-package-info-body">
									{ReactHtmlParser(pack.description)}
									<div className="learn-package-price">Course Price (per student): ${pack.price}</div>
									<a href={pack.link} target="new">
										{pack.linkText}
									</a>
								</div>
							</Card.Body>
						</Accordion.Collapse>
					</Card>
				</Accordion>
				{/* <div className="learn-dive-package-info-title">{pack.title}</div>
				<div className="learn-dive-package-info-body">
					{ReactHtmlParser(pack.description)}
					<div className="learn-package-price">Course Price (per student): ${pack.price}</div>
					<a href={pack.link} target="new">
						{pack.linkText}
					</a>
				</div> */}
			</div>
		));
	};

	render() {
		return (
			<div className="learn">
				<div className="learn-inner-package-info">
					<h3>Ready to take the next step?</h3>
					<h4>We look forward to diving with you soon!!</h4>
					<p style={{ marginBottom: '2em' }}>
						If you would like more information about a course, please <Link to="/contact">contact us</Link>.
					</p>
					<div className="learn-dive-package-logos">
						<img src={sdi_small} alt={sdi_small} />
						<img src={padi_small} alt={padi_small} />
					</div>
					<p>
						CERTIFICATION’S AVAILABLE ARE AS FOLLOWS:
						<br />
						<small>(Tap the title to learn more)</small>
					</p>
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
