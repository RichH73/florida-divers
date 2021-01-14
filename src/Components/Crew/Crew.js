import React, { Component } from 'react';
import './Crew.css';
import ReactGA from 'react-ga';
import nich_small from '../../images/nich_small.jpg';
import tam_small from '../../images/tam_small.jpg';
import sandi_small from '../../images/sandi_small.png';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
class Crew extends Component {
	componentDidMount() {
		ReactGA.pageview('/Crew');
	}
	render() {
		return (
			<div className="meet-the-crew">
				<Card className="meet-the-crew-card">
					<Card.Img variant="top" src={nich_small} />
					<Card.Body>
						<Card.Title>Nicholas Strazzulla</Card.Title>
						<Card.Text>
							Nicholas' experience includes: 10+ years as a paramedic 8 years as a scuba diver 2 years as a Hyperbaric technician.
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem className="meet-the-crew-list">MSDT</ListGroupItem>
						<ListGroupItem className="meet-the-crew-list">Lead Instructor</ListGroupItem>
						<ListGroupItem className="meet-the-crew-list">FloriDivers Founder</ListGroupItem>
					</ListGroup>
				</Card>

				<Card className="meet-the-crew-card">
					<Card.Img variant="top" src={tam_small} />
					<Card.Body>
						<Card.Title>Tammy Strazzulla</Card.Title>
						<Card.Text>
							Tammy started out as a student, and now helps manage Floridivers. Tammy is currently on the path to obtaining her Dive Master
							Certification.
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem className="meet-the-crew-list">Master Scub​a Diver</ListGroupItem>
					</ListGroup>
				</Card>

				<Card className="meet-the-crew-card">
					<Card.Img variant="top" src={sandi_small} />
					<Card.Body>
						<Card.Title>Sandi Zoch</Card.Title>
						<Card.Text>
							Sandi began diving in 2006, and in 2013 started her career as a dive instructor, working her way up the ranks. She is our premier PSD
							instructor, and is more than qualified to help you achieve all of your diving dreams. She is a blessing and a treasure here at
							Floridivers.
						</Card.Text>
					</Card.Body>
					<ListGroup className="list-group-flush">
						<ListGroupItem className="meet-the-crew-list">Course Director</ListGroupItem>
						<ListGroupItem className="meet-the-crew-list">Public Safety Diver Instructor</ListGroupItem>
					</ListGroup>
				</Card>
			</div>
		);
	}
}

export default Crew;
