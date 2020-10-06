import React from 'react';
import { Link } from 'react-router-dom';
import './Drinks.css';

function Drinks() {
	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

	const [drinksData, setDrinksData] = React.useState([]);

	const filterDrink = (spirit) => {
		fetch(`${urlBase}${spirit}`)
			.then((response) => response.json())
			.then((data) => {
				console.log(data.drinks);
				setDrinksData(data.drinks);
			});
	};

	return (
		<div className='Drinks'>
			<h2>Drinks CONTENT</h2>
			<div className='bottles'>
				<div className='bottle-div'>
					<span className='drink-type'>VODKA</span>
					<img
						onClick={() => filterDrink('vodka')}
						className='Bottle'
						src='https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/09/8686-ABSOLUT-VODKA-w.png'
						alt='bottle'></img>
				</div>

				<div className='bottle-div'>
					<span className='drink-type'>GIN</span>
					<img
						onClick={() => filterDrink('gin')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BEEF005.png'
						alt='bottle'></img>
				</div>

				<div className='bottle-div'>
					<span className='drink-type'>TEQUILA</span>
					<img
						onClick={() => filterDrink('tequila')}
						className='Bottle'
						src='https://cdn.shopify.com/s/files/1/1531/2799/products/JoseCuervo_Reposado_fae752a8-6806-4ffc-9e71-59d4afa57524_grande.png?v=1597638393'
						alt='bottle'></img>
				</div>

				<div className='bottle-div'>
					<span className='drink-type'>BOURBON</span>
					<img
						onClick={() => filterDrink('bourbon')}
						className='Bottle'
						src='https://marketaonline.com/wp-content/uploads/edd/2018/09/49750_0_9999_v1_m56577569854542926_large__83719.1452472340.1000.1200-e1538013302657.png'
						alt='bottle'></img>
				</div>

				<div className='bottle-div'>
					<span className='drink-type'>RUM</span>
					<img
						onClick={() => filterDrink('rum')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BACA020.png'
						alt='bottle'></img>
				</div>

				<div className='bottle-div'>
					<span className='drink-type'>SCOTCH</span>
					<img
						onClick={() => filterDrink('scotch')}
						className='Bottle'
						src='https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/09/002464-DEWAR-S-WHITE-LABEL-BLENDED-SCOTCH-w.png'
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
