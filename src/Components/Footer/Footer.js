import React from 'react';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<a href='https://github.com/josilob' target='_blank' rel='noreferrer'>
				<i className='fab fa-github-square'> </i>
			</a>
			<p>-Bojan Josilo-</p>
			<a
				href='https://www.linkedin.com/in/josilo/'
				target='_blank'
				rel='noreferrer'>
				<i className='fab fa-linkedin'> </i>
			</a>
		</footer>
	);
}

export default Footer;
