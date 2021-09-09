import React from 'react';
import './Home.css';
import martini from '../../images/lime.png';

function Home() {
	return (
		<div className='Home'>
			<img src={martini} />
			<p className='home-intro'>
				Thirsty?
				<br />
				With hundreds of delicious cocktails from expert bartenders around the
				world, you will find a recipe for every taste and occasion. No matter if you
				would like a classic cocktail, a party punch or an original concoction, just
				a shake, stir or pour away.
			</p>
		</div>
	);
}

export default Home;
