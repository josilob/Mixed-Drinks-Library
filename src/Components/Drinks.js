import React from 'react';
import Cocktail from './Cocktail';

function Drinks() {
	fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
		.then((response) => {
			return response.json();
		})
		.then((response) => (drink.textContent = response.drinks[0].strDrink));

	return <div className='Drinks'></div>;
}

export default Drinks;
