import React from 'react';
import './Cocktail.css';

function Cocktail(props) {
	const [details, setDetails] = React.useState([]);
	const [ingredients, setIngredients] = React.useState([]);

	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

	const readDrink = (idDrink) => {
		fetch(`${urlBase}${idDrink}`)
			.then((response) => response.json())
			.then((data) => {
				setDetails(data.drinks[0]);
			});
	};

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
				ingredientMeasure: details[`strMeasure${i}`],
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
							<h4>{element.ingredientName} :</h4>

							<p> &nbsp;{element.ingredientMeasure}</p>
						</div>
					))}
				</div>
			</div>
			<p className='instructions'>{details.strInstructions}</p>
		</div>
	);
}

export default Cocktail;
