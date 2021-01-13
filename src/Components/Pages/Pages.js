import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './Pages.css';

import Main from '../Main/Main';
import About from '../About/About';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';
import Crew from '../Crew/Crew';
import Learn from '../Learn/Learn';
import calendar from '../Calendar/Calendar';
import Admin from '../Admin/Admin';
import GalleryIndex from '../Gallery/GalleryIndex';

class Body extends Component {
	render() {
		return (
			<div className="main-body">
				<Route exact path="/" component={Main} />
				<Route path="/#home" component={Main} />
				<Route path="/about" component={About} />
				<Route path="/#about" component={About} />
				<Route path="/crew" component={Crew} />
				<Route path="/gallery" component={Gallery} />
				<Route path="/contact" component={Contact} />
				<Route path="/learn" component={Learn} />
				<Route path="/calendar" component={calendar} />
				<Route path="/admin" component={Admin} />
				<Route path="/gallery-index" component={GalleryIndex} />
			</div>
		);
	}
}

export default Body;
