import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import './Cocktail.css';
import axios from 'axios';

function Cocktail(props) {
	const { userID, location } = props;
	// const collectionRef = useRef([]);
	const [collection, setCollection] = useState([]); // user's favorite drinks
	const [details, setDetails] = useState([]); // displayed drink details
	const [ingredients, setIngredients] = useState([]); // displayed drink's ingredients
	const drinkIncluded = collection.some(
		(el) => el.drinkName === details.strDrink
	);

	const [included, setIncluded] = useState(drinkIncluded);

	let drinkData = {
		drink: '',
		image: '',
		id: '',
		user: ''
	};

	// console.log(details);

	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
	const backendUrl = 'https://mdl-server.herokuapp.com/';
	// const backendUrl = 'http://localhost:27017/';

	const addDrink = async (newDrink) => {
		try {
			await fetch(`${backendUrl}drinks/add`, {
				method: 'post',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(drinkData)
			});
		} catch (err) {
			console.log(err.message);
		}
	};

	const removeDrink = async (id) => {
		try {
			await fetch(`${backendUrl}drinks/delete/${id}`, { method: 'DELETE' });
		} catch (err) {
			console.log(err.message);
		}
	};

	const mappedIngredients = ingredients.map((element, index) => (
		<div key={index} className='ingredients'>
			{element.ingredientName && <h4>{element.ingredientName} </h4>}
			{element.ingredientMeasure && <p> &nbsp;: {element.ingredientMeasure} </p>}
		</div>
	));

	const getUsersDrinks = async (id) => {
		try {
			// const { data } = await axios(`http://localhost:27017/drinks/get/${id}`);
			const { data } = await axios(
				`https://mdl-server.herokuapp.com/drinks/get/${id}`
			);
			setCollection(data);
		} catch (err) {
			console.log(err.message);
		}
	};
	const readDrink = async (idDrink) => {
		try {
			const { data } = await axios(`${urlBase}${idDrink}`);
			setDetails(data.drinks[0]);
		} catch (err) {
			console.log(err.message);
		} finally {
		}
	};

	useEffect(() => {
		if (userID) {
			getUsersDrinks(userID);
			setIncluded(drinkIncluded);
		}

		readDrink(location?.state?.idDrink);
	}, [location?.state?.idDrink, drinkIncluded]);

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

	const drinkID = collection.find(
		(el) => el?.drinkName === details?.strDrink
	)?._id;

	return (
		<div className='Cocktail'>
			<div className='drink-card'>
				<h1 className='drinkName'>{details.strDrink}</h1>
				{details.strDrink ? (
					<img className='drink-img' src={details.strDrinkThumb} alt='drink' />
				) : (
					<Loader />
				)}
				<div>
					<h3 className='ingr-list'>List of ingredients:</h3>
					{mappedIngredients}
					<p className='instructions'>{details.strInstructions}</p>
				</div>
				{!included
					? details.strDrink &&
					  userID && (
							<button
								onClick={() => {
									drinkData = {
										drink: details.strDrink,
										image: details.strDrinkThumb,
										id: details.idDrink,
										user: userID
									};
									addDrink({ drinkData });
									setIncluded(!included);
								}}
								className='handle-post__btn'>
								Favorite
							</button>
					  )
					: details.strDrink &&
					  userID && (
							<button
								onClick={() => {
									removeDrink(drinkID);
									getUsersDrinks(userID);
									setIncluded(!included);
								}}
								className='handle-post__btn'>
								Remove
							</button>
					  )}
			</div>

			<br />
		</div>
	);
}

export default Cocktail;
