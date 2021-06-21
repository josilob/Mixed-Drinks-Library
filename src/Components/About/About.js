import React from 'react';
import './About.css';

function About() {
	return (
		<div className='About'>
			<h4 className='about-text'>About the project:</h4>

			<p className='about-text'>
				Project made with the ReactJS and TheCocktailDB API
			</p>

			<p className='about-text'>
				The idea behind the project was to reinforce the knowledge of functional
				components and react hooks as the most recent features in the ReactJS.
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
