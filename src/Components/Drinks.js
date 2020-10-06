import React from 'react';
import { Link } from 'react-router-dom';
import './Drinks.css';

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
			<div class='bottles'>
				<div class='bottle-div'>
					<span class='name'>Vodka</span>
					<img
						onClick={() => filterDrink('vodka')}
						className='Bottle'
						src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c240.png'
						alt='bottle'></img>
				</div>

				<div class='bottle-div'>
					<span class='name'>Gin</span>
					<img
						onClick={() => filterDrink('gin')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BEEF005.png'
						alt='bottle'></img>
				</div>

				<div class='bottle-div'>
					<span class='name'>Tequila</span>
					<img
						onClick={() => filterDrink('tequila')}
						className='Bottle'
						src='https://www.donjulio.com/static/images/product-blanco.png'
						alt='bottle'></img>
				</div>

				<div class='bottle-div'>
					<span class='name'>Bourbon</span>
					<img
						onClick={() => filterDrink('bourbon')}
						className='Bottle'
						src='https://marketaonline.com/wp-content/uploads/edd/2018/09/49750_0_9999_v1_m56577569854542926_large__83719.1452472340.1000.1200-e1538013302657.png'
						alt='bottle'></img>
				</div>

				<div class='bottle-div'>
					<span class='name'>RUM</span>
					<img
						onClick={() => filterDrink('rum')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BACA020.png'
						alt='bottle'></img>
				</div>

				<div class='bottle-div'>
					<span class='name'>Scotch</span>
					<img
						onClick={() => filterDrink('scotch')}
						className='Bottle'
						src='https://liquorlakeland.com/wp-content/uploads/2018/07/Dewars-1.75.png'
						alt=''></img>
				</div>
			</div>
			<div className='drink-list'>
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
		</div>
	);
}

export default Drinks;
