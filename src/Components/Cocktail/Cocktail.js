import React, { useState, useEffect, useRef } from 'react';
import Loader from '../Loader/Loader';
import './Cocktail.css';
import axios from 'axios';

function Cocktail(props) {
	const [details, setDetails] = useState([]);
	const [ingredients, setIngredients] = useState([]);
	const [showLoader, setShowLoader] = useState(false);
	const collectionRef = useRef([]);

	let drinkData = {
		drink: '',
		image: '',
		id: '',
		user: ''
	};
	const { userID, location } = props;

	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
	const backendUrl = 'https://mdl-server.herokuapp.com/';
	// const backendUrl = 'http://localhost:27017/';

	const drinkIncluded = collectionRef?.current.some(
		(el) => el.drinkName === details.strDrink
	);

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
			<h4>{element.ingredientName} </h4>
			<p> &nbsp;{`${element.ingredientMeasure}` || ''}</p>
		</div>
	));

	useEffect(() => {
		const getUsersDrinks = async (id) => {
			try {
				// const { data } = await axios(`http://localhost:27017/drinks/get/${id}`);
				const { data } = await axios(
					`https://mdl-server.herokuapp.com/drinks/get/${id}`
				);
				collectionRef.current = data;
			} catch (err) {
				console.log(err.message);
			}
		};
		const readDrink = async (idDrink) => {
			try {
				setShowLoader(true);
				const { data } = await axios(`${urlBase}${idDrink}`);
				setDetails(data.drinks[0]);
			} catch (err) {
				console.log(err.message);
			} finally {
				setShowLoader(false);
			}
		};

		if (userID) getUsersDrinks(userID);
		readDrink(location?.state?.idDrink);
	}, [location?.state?.idDrink]);

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

	const drinkID = collectionRef?.current?.find(
		(el) => el?.drinkName === details?.strDrink
	)?._id;

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
					{mappedIngredients}
				</div>
				{drinkIncluded ? (
					<button
						onClick={() => {
							removeDrink(drinkID);
						}}
						className='handle-post__btn'>
						Remove
					</button>
				) : (
					<button
						onClick={() => {
							drinkData = {
								drink: details.strDrink,
								image: details.strDrinkThumb,
								id: details.idDrink,
								user: userID
							};
							addDrink({ drinkData });
						}}
						className='handle-post__btn'>
						Favorite
					</button>
				)}
			</div>
			<p className='instructions'>{details.strInstructions}</p>
			<br />
		</div>
	);
}

export default Cocktail;
