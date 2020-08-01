import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<footer>
				<small>
					All content owned by FloriDivers. Contact the{' '}
					<a href="mailto:rich@richthats.me" style={{ color: 'blue', fontWeight: 'bold' }}>
						Webmaster
					</a>
					.
				</small>
			</footer>
		</div>
	);
};

export default Footer;
