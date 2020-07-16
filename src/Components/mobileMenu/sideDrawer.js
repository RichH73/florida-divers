import React from 'react';
import './SideDrawer.css';

class SideDrawer extends React.Component {
	render() {
		return (
			<div>
				<nav className="side-drawer">
					<div id="logo">
						<img src="/images/transparent_logo.png" alt="logo" />
					</div>
					<ul>
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/about">About</a>
						</li>
						<li>
							<a href="/contact">Contact</a>
						</li>
						<li>
							<a href="/crew">Crew</a>
						</li>
						<li>
							<a href="/gallery">Gallery</a>
						</li>
						<li>
							<a href="/learn">Learn</a>
						</li>
						<li>
							<a href="/store">Store</a>
						</li>
					</ul>
				</nav>
			</div>
		);
	}
}

export default SideDrawer;
