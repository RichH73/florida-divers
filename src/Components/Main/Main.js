import React, { Component } from 'react';
import './Main.css';
import ReactGA from 'react-ga';
import Subscribe from '../Helpers/Subscribe';
class Main extends Component {
	componentDidMount() {
		ReactGA.pageview('/Home');
	}
	render() {
		return (
			<React.Fragment>
				<div className="main">
					<div className="main-intro">
						<h1>Welcome to FloriDivers</h1>
						<p>Never been in the ocean? Don't worry!</p>
						<p>
							Floridivers works with new divers, swimmers, and clients of all ages. Got a vacation planned? Let us certify you and your family so you
							can see and enjoy things that most other families won't. Our classes are flexible to meet the needs of your hectic schedule and we're
							outfitted to help you make a big splash.
						</p>
					</div>
					<div className="main-hero">
						<img src="images/hero.png" alt="hero img" />
					</div>
				</div>
				{window.innerWidth < 601 ? <Subscribe history={this.props.history} /> : ''}
			</React.Fragment>
		);
	}
}

export default Main;

/*
			<div id="main">
				<div className="main">
					<div id="logo">
						<img src="images/transparent_logo.png" alt="logo" />
					</div>
					<div className="intro">
						<h1>Welcome to FloriDivers</h1>
						<div id="intro">
							<p>Never been in the ocean? Don't worry!</p>
							<p>
								Floridivers works with new divers, swimmers, and clients of all ages. Got a vacation planned? Let us certify you and your family so
								you can see and enjoy things that most other families won't. Our classes are flexible to meet the needs of your hectic schedule and
								we're outfitted to help you make a big splash.
							</p>
						</div>
					</div>
				</div>
				<div id="hero">
					<img src="images/hero.png" alt="hero img" />
				</div>
			</div>

*/
