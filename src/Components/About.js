import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<h4 className='about-text'>About the project:</h4>

			<p className='about-text'> Student name: Bojan Josilo</p>

			<p className='about-text'>
				React based page made in conjunction with TheCocktialDB API.
			</p>

			<p className='about-text'>
				Product of the sixth week at Remote Software Engineering Immersive
				Coding Bootcamp at:
			</p>
			<img
				className='ga-logo'
				src='https://lh3.googleusercontent.com/proxy/FeFu7zPsbqBhGc6p9xoXP5FzgiDSBJBj3IVBn74hkUe0yPT8PzTwLxl9SZRMmDUTJw04MH0iCoJuEMS4IzHPtX45OB3qqlK79hxoJF8YCBaQCum6kZ-HKbuj3l_2Q-XntqE'
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
