import React from 'react';
import './Cocktail.css';
import axios from 'axios';

function Cocktail(props) {
	const [details, setDetails] = React.useState([]);
	const [ingredients, setIngredients] = React.useState([]);

	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

	async function readDrink(idDrink) {
		try {
			const { data } = await axios(`${urlBase}${idDrink}`);
			console.log(data);
			setDetails(data.drinks[0]);
		} catch (err) {
			console.log(err);
		}
	}

	React.useEffect(() => {
		readDrink(props.location.state.idDrink);
	}, []);

	React.useEffect(() => {
		listIngr();
	}, [details]);

	const listIngr = () => {
		let ingr = [];
		for (let i = 1; i < 16; i++) {
			if (details[`strIngredient${i}`] == null) break;
			ingr.push({
				ingredientName: details[`strIngredient${i}`],
				ingredientMeasure: details[`strMeasure${i}`] || '',
			});
		}
		setIngredients(ingr);
	};

	return (
		<div className='Cocktail'>
			<div className='drink-card'>
				<h1 className='drinkName'>{details.strDrink}</h1>
				<img className='drink-img' src={details.strDrinkThumb} alt='drink' />
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
