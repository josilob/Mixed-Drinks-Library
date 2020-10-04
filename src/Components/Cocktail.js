import React from 'react';

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
		console.log('details log', details);
	}, [details]);

	const listIngr = () => {
		let ingr = [];
		for (let i = 1; i < 16; i++) {
			console.log('New string log', details[`strIngredient${i}`]);
			if (details[`strIngredient${i}`] == null) break;
			ingr.push({
				ingredientName: details[`strIngredient${i}`],
				ingredientMeasure: details[`strMeasure${i}`],
			});
		}
		setIngredients(ingr);
		console.log('ingredients', ingr);
	};

	return (
		<div className='Cocktail'>
			<h1>{details.strDrink}</h1>
			<img class='drink-img' src={details.strDrinkThumb} />
			<div>
				<div>
					List of ingredients:
					{ingredients.map((element, index) => (
						<div key={index}>
							{element.ingredientName}
							{'  '}
							{element.ingredientMeasure}
						</div>
					))}
				</div>
				<p>{details.strInstructions}</p>
			</div>
		</div>
	);
}

export default Cocktail;
