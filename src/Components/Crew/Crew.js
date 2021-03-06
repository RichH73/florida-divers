import React, { Component } from 'react';
import './Crew.css';
import ReactGA from 'react-ga';
class Crew extends Component {
	componentDidMount() {
		ReactGA.pageview('/Crew');
	}
	render() {
		return (
			<div className="crew">
				<h3>Meet the Crew</h3>
				<div className="crew-grid">
					<div className="crew-grid-card item1">
						<img src="https://www.floridivers.com/images/nich_small.jpg" alt="Nich" />
						<h2>Nicholas Strazzulla</h2>
						<h3>
							MSDT
							<br />
							Founder & Lead Instructor
						</h3>
						<p>Nicholas' experience includes: 10+ years as a paramedic 8 years as a scuba diver 2 years as a Hyperbaric technician.</p>
					</div>

					<div className="crew-grid-card item2">
						<img src="images/tam_small.jpg" alt="Tammy" />
						<h2>Tammy Strazzulla</h2>
						<h3>Master Scub​a Diver</h3>
						<p>
							Tammy started out as a student, and now helps manage Floridivers. Tammy is currently on the path to obtaining her Dive Master
							Certification.
						</p>
					</div>

					<div className="crew-grid-card item3">
						<img src="images/sandi_small.png" alt="Sandi" />
						<h2>Sandi Zoch</h2>
						<h3>
							Course Director
							<br />
							Public Safety Diver Instructor
						</h3>
						<i>"As early as I can remember, I have been fascinated with the Ocean"</i>
						<br />
						<p>
							Sandi began diving in 2006, and in 2013 started her career as a dive instructor, working her way up the ranks. She is our premier PSD
							instructor, and is more than qualified to help you achieve all of your diving dreams. She is a blessing and a treasure here at
							Floridivers.
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Crew;
