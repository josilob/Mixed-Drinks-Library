import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Drinks.css';
import gin from '../../images/gin-min.png';
import vodka from '../../images/vodka-min.png';
import scotch from '../../images/scotch-min.png';
import bourbon from '../../images/bourbon-min.png';
import tequila from '../../images/tequila-min.png';
import rum from '../../images/rum-min.png';

function Drinks() {
	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

	const [drinksData, setDrinksData] = useState([]);

	const listRef = useRef(null);
	const scrollToDrinks = () => {
		if (listRef.current !== null)
			listRef.current.scrollIntoView({ block: 'start', behavior: 'smooth' });
	};

	async function filterDrink(spirit) {
		try {
			const { data } = await axios(`${urlBase}${spirit}`);
			setDrinksData(data.drinks);
		} catch (err) {
			console.log(err);
		}
	}

	const spirits = [
		{ image: tequila, base: 'tequila' },
		{ image: rum, base: 'rum' },
		{ image: vodka, base: 'vodka' },
		{ image: gin, base: 'gin' },
		{ image: scotch, base: 'scotch' },
		{ image: bourbon, base: 'bourbon' }
	];

	const mappedBottles = spirits.map((btl, idx) => {
		return (
			<div className='bottle-div' key={idx}>
				<h3 className='drink-type' id={btl.base}>
					{btl.base.toUpperCase()}
				</h3>
				<img
					onClick={() => {
						filterDrink(btl.base);
						setTimeout(scrollToDrinks, 350);
					}}
					className='Bottle'
					src={btl.image}
					alt='bottle'
				/>
			</div>
		);
	});

	const mappedDrinks = drinksData.map((element) => (
		<Link
			key={element.idDrink}
			to={{
				pathname: '/cocktail/' + element.strDrink,
				state: { idDrink: element.idDrink }
			}}>
			<div className='cocktail-list-name'>{element.strDrink}</div>
		</Link>
	));

	return (
		<div className='Drinks'>
			<div className='drinks-intro'>
				<h2>
					Choose your favorite spirit below and our bartender will come up with an
					idea. Cheers!
				</h2>
			</div>
			<div className='bottles'>{mappedBottles}</div>
			<div className='drink-list' ref={listRef}>
				{mappedDrinks}
			</div>
		</div>
	);
}
export default Drinks;
