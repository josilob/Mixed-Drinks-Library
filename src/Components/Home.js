import React from 'react';
import './Home.css';

function Home() {
	return (
		<div className='Home'>
			<div className='home'>
				<p className='home-intro'>
					Thirsty?
					<br />
					With hundreds of delicious cocktails from expert bartenders around the
					world, you will find a recipe for every taste and occasion. No matter
					if you would like a classic cocktail, a party punch or an original
					concoction, just a shake, stir or pour away.
				</p>

				<img
					className='home-img'
					src='https://www.occas.se/wp-content/uploads/2014/02/ddd_staende_pos.png'
					alt='img'
				/>
			</div>
		</div>
	);
}

export default Home;
