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
					world, no matter if you would like a classic cocktail, a punch for a
					party or an original concoction, you will find a recipe for every
					taste and occasion. <br />
					Just a shake, stir or pour away.
				</p>
				<img
					className='home-img2'
					src='https://cdn.shopify.com/s/files/1/1795/8271/products/mixed_drinks_760x.png?v=1507487749%27'
					alt='img'
				/>

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
