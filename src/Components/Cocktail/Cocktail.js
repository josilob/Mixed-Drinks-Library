import React, { useState, useEffect } from 'react';
import Loader from '../Loader/Loader';
import './Cocktail.css';
import axios from 'axios';

function Cocktail(props) {
	const [details, setDetails] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [showLoader, setShowLoader] = useState(false);

	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

	async function readDrink(idDrink) {
		try {
			setShowLoader(true);
			const { data } = await axios(`${urlBase}${idDrink}`);
			setDetails(data.drinks[0]);
		} catch (err) {
			console.log(err.message);
		} finally {
			setShowLoader(false);
		}
	}

	useEffect(() => {
		readDrink(props.location.state.idDrink);
	}, [props.location.state.idDrink]);

	useEffect(() => {
		const listIngr = () => {
			let ingr = [];
			for (let i = 1; i < 16; i++) {
				if (details[`strIngredient${i}`] == null) break;
				ingr.push({
					ingredientName: details[`strIngredient${i}`],
					ingredientMeasure: details[`strMeasure${i}`] || ''
				});
			}
			setIngredients(ingr);
		};
		listIngr();
	}, [details]);

	return (
		<div className='Cocktail'>
			<div className='drink-card'>
				<h1 className='drinkName'>{details.strDrink}</h1>
				{showLoader ? (
					<Loader />
				) : (
					<img className='drink-img' src={details.strDrinkThumb} alt='drink' />
				)}
				<div>
					<h3 className='ingr-list'>List of ingredients:</h3>
					{ingredients.map((element, index) => (
						<div key={index} className='ingredients'>
							<h4>{element.ingredientName} </h4>

							<p> &nbsp;{`${element.ingredientMeasure}` || ''}</p>
						</div>
					))}
				</div>
			</div>
			<p className='instructions'>{details.strInstructions}</p>
			<br />
		</div>
	);
}

export default Cocktail;
