import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import martini from '../../images/lime.png';

function Home({ setIsSignup }) {
	return (
		<div className='home'>
			<img src={martini} alt='martini-img' />
			<p className='home-intro'>
				Thirsty?
				<br />
				With hundreds of delicious cocktails from expert bartenders around the
				world, you will find a recipe for every taste and occasion. No matter if you
				would like a classic cocktail, a party punch or an original concoction, just
				a shake, stir or pour away.
			</p>

			<div className='home-links'>
				<Link to='/drinks'>Search</Link>
				<Link to='/form' onClick={() => setIsSignup(true)}>
					Register
				</Link>
			</div>
		</div>
	);
}

export default Home;
