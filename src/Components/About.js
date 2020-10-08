import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<h4 className='about-text'>About the project:</h4>

			<p className='about-text'> Student name: Bojan Josilo</p>

			<p className='about-text'>
				React based page combined with TheCocktialDB API.
			</p>

			<p className='about-text'>
				Product of the sixth week at Remote Software Engineering Immersive
				Coding Bootcamp at:
			</p>
			<img
				className='ga-logo'
				src='https://info.mercer.com/rs/521-DEV-513/images/General-Assembly-logo.png'
				alt='img'
			/>
			<p className='about-text'>
				Cocktail page filters mixed drinks by pivotal spirit and displays
				possible options. After clicking one of the cocktails, it further
				displays image with necessary ingredients, measurements and preparation
				steps.
				<br />
				Date of presentation: 10-09-2020
			</p>
		</div>
	);
}

export default About;
