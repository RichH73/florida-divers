import React from 'react';
import './Footer.css';

const Footer = () => {
	return (
		<div className="footer">
			<footer>
				<small>
					All content owned by FloriDivers. Contact the{' '}
					<a href="mailto:webmaster@rich-hosts.com" style={{ color: 'blue', fontWeight: 'bold' }}>
						Webmaster
					</a>
					.
				</small>
			</footer>
		</div>
	);
};

export default Footer;
