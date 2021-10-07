import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import axios from 'axios';
import './Drinks.css';
import gin from '../../images/gin-min.png';
import vodka from '../../images/vodka-min.png';
import scotch from '../../images/scotch-min.png';
import bourbon from '../../images/bourbon-min.png';
import tequila from '../../images/tequila-min.png';
import rum from '../../images/rum-min.png';
import loader from '../../images/bwloader.gif';

function Drinks(props) {
	const [isSearching, setIsSearching] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const intervalRef = useRef(null);
	const listRef = useRef(null);

	const { user, userID, drinksData, setDrinksData } = props;

	const spiritUrl = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';
	const drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
	const spirits = [
		{ image: tequila, base: 'tequila' },
		{ image: rum, base: 'rum' },
		{ image: vodka, base: 'vodka' },
		{ image: gin, base: 'gin' },
		{ image: scotch, base: 'scotch' },
		{ image: bourbon, base: 'bourbon' }
	];

	// console.log(listRef?.current?.offsetTop);

	async function searchDrink(drinkName) {
		const { data } = await axios.get(`${drinkUrl}${drinkName}`);
		return data;
	}

	useEffect(() => {
		if (searchTerm) {
			setIsSearching(true);
			// console.log(intervalRef.current);
			intervalRef.current = setTimeout(() => {
				searchDrink(searchTerm).then((res) => {
					setIsSearching(false);
					setDrinksData(res.drinks);
					scrollToDrinks();
				});
			}, 500);
		} else {
			setDrinksData([]);
			clearTimeout(intervalRef.current);
		}
		return () => clearTimeout(intervalRef.current);
	}, [searchTerm]);

	const scrollToDrinks = () => {
		if (listRef.current) window.scrollTo(0, listRef.current.offsetTop);
	};

	async function filterDrink(spirit) {
		try {
			const { data } = await axios(`${spiritUrl}${spirit}`);
			setDrinksData(data.drinks);
		} catch (err) {
			console.log(err);
		}
	}

	async function fetchCollection(id) {
		try {
			// const { data } = await axios(`http://localhost:27017/drinks/get/${id}`);
			const { data } = await axios(
				`https://mdl-server.herokuapp.com/drinks/get/${id}`
			);
			// console.log(data);
			setDrinksData(data);
		} catch (err) {
			console.log(err.message);
		}
	}

	const mappedBottles = spirits.map((btl, idx) => {
		return (
			<div
				className='bottle-div'
				key={idx}
				onClick={() => {
					filterDrink(btl.base);
					setTimeout(scrollToDrinks, 350);
				}}>
				<h3 className='drink-type' id={btl.base}>
					{btl.base.toUpperCase()}
				</h3>
				<img className='Bottle' src={btl.image} alt={`bottle of ${btl.base}`} />
			</div>
		);
	});

	const mappedDrinks = drinksData?.map((element) => (
		<Link
			key={element.idDrink}
			to={{
				pathname: '/cocktail/' + (element.strDrink || element.drinkName),
				state: { idDrink: element.idDrink }
			}}>
			<div className='cocktail-list-name'>
				{element.strDrink || element.drinkName}
			</div>
		</Link>
	));

	return (
		<div className='Drinks'>
			<div className='drinks-intro'>
				<h2>
					Choose your favorite spirit below or simply type in the name of the drink
					and our bartender will come up with an answer. Cheers!
				</h2>
				<div id='searchBar'>
					<TextField
						onChange={(e) => setSearchTerm(e.target.value)}
						variant='outlined'
						fullWidth
						label='Search Drink by Name'
						type='text'
						id='drink-input'
					/>
					{isSearching && (
						<img src={loader} alt='loader' className='searchbar-loader' />
					)}
				</div>
				{user && (
					<div className='collection-container'>
						<p>or check </p>
						<br />
						<br />
						<button
							className='btn'
							onClick={() => {
								fetchCollection(userID);
								setTimeout(scrollToDrinks, 350);
							}}>
							{user}'s collection
						</button>
					</div>
				)}
			</div>

			<div className='bottles'>{mappedBottles}</div>
			<div className='drink-list' ref={listRef}>
				{mappedDrinks}
			</div>
		</div>
	);
}
export default Drinks;
