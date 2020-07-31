import React, { Component } from 'react';
import './About.css';
import ReactGA from 'react-ga';

class About extends Component {
	componentDidMount() {
		ReactGA.pageview('/About');
	}
	render() {
		return (
			<div className="about">
				<h2>Dreams do come true!!!</h2>
				<p>
					Founded in 2016, Floridivers was the result of one little boy standing on a beach in Santa Monica, with his feet in the Pacific thinking
					about what could be seen under the water's surface. Years later, my dream of seeing the underwater world came true. In 2010, I finally
					decided to take scuba lessons. In 2011, I worked my way up to Dive master and in 2015, I became a PADI open water scuba instructor. Now, I'd
					like to share my dream of the underwater world with you! Let us help you discover the therapy and beauty of the underwater world, its
					inhabitants and its mystery. Classes range from Open water scuba diver all the way up to dive master! When you're ready, come on in, we're
					waiting for you!!!
				</p>
				<h2>Our Goal</h2>
				<p>
					At Floridivers , we know about the amazing connection that can occur when you go underwater and explore a whole new world. Let us guide you
					in that amazing journey.
				</p>
			</div>
		);
	}
}

export default About;
