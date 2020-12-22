import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<h4 className='about-text'>About the project:</h4>

			<p className='about-text'>
				Project made with React and TheCocktailDB API
			</p>

			<p className='about-text'>
				Created during the second week of studying React. This project is an
				example of applying functional components and React Hooks as a new
				features.
			</p>

			<p className='about-text'>
				Cocktail page filters mixed drinks by pivotal spirit and displays
				possible options. After clicking one of the cocktails, it further
				displays image with necessary ingredients, measurements and preparation
				steps.
			</p>
		</div>
	);
}

export default About;
