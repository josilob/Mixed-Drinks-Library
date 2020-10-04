import React from 'react';
import { Link } from 'react-router-dom';

function Drinks() {
	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

	const [drinksData, setDrinksData] = React.useState([]);
	//Fetch JSON Object and filter necessary data for drinks when mapping through
	const filterDrink = (spirit) => {
		fetch(`${urlBase}${spirit}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.drinks);
				setDrinksData(data.drinks);
			});
	};
	//CHANGE PLACEHOLDER PICS LATER
	return (
		<div className='Drinks'>
			<h2>Drinks CONTENT</h2>
			<img
				onClick={() => filterDrink('vodka')}
				className='Bottle'
				src='https://www.iconfinder.com/data/icons/food-drink-15/115/drink-food-beverage_196-512.png'
				alt=''></img>
			<img
				onClick={() => filterDrink('gin')}
				className='Bottle'
				src='https://www.iconfinder.com/data/icons/food-drink-15/115/drink-food-beverage_196-512.png'
				alt=''></img>
			<img
				onClick={() => filterDrink('tequila')}
				className='Bottle'
				src='https://www.iconfinder.com/data/icons/food-drink-15/115/drink-food-beverage_196-512.png'
				alt=''></img>
			<img
				onClick={() => filterDrink('bourbon')}
				className='Bottle'
				src='https://www.iconfinder.com/data/icons/food-drink-15/115/drink-food-beverage_196-512.png'
				alt=''></img>
			{drinksData.map((element) => (
				<Link
					key={element.idDrink}
					to={{
						pathname: '/cocktail/' + element.strDrink,
						state: { idDrink: element.idDrink },
					}}>
					<div>{element.strDrink}</div>
				</Link>
			))}
		</div>
	);
}

export default Drinks;
