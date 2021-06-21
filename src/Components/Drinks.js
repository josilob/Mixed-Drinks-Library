import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Drinks.css';
import gin from '../images/gin-min.png';
import vodka from '../images/vodka-min.png';
import scotch from '../images/scotch-min.png';
import bourbon from '../images/bourbon-min.png';
import tequila from '../images/tequila-min.png';
import rum from '../images/rum-min.png';

function Drinks() {
	const urlBase = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=';

	const [drinksData, setDrinksData] = React.useState([]);

	async function filterDrink(spirit) {
		try {
			const { data } = await axios(`${urlBase}${spirit}`);
			setDrinksData(data.drinks);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className='Drinks'>
			<div className='drinks-intro'>
				<h2>
					Choose your favorite spirit below and our bartender will come up with an
					idea. Cheers!
				</h2>
			</div>
			<div className='bottles'>
				<div className='bottle-div'>
					<h3 className='drink-type' id='tequila'>
						TEQUILA
					</h3>
					<img
						onClick={() => {
							filterDrink('tequila');
							setTimeout(function () {
								window.scrollTo(0, document.body.scrollHeight);
							}, 250);
						}}
						className='Bottle'
						src={tequila}
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='rum'>
						RUM
					</h3>
					<img
						onClick={() => {
							filterDrink('rum');
							setTimeout(function () {
								window.scrollTo(0, 850);
							}, 250);
						}}
						className='Bottle'
						src={rum}
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='vodka'>
						VODKA
					</h3>
					<img
						onClick={() => {
							filterDrink('vodka');
							setTimeout(function () {
								window.scrollTo(0, 850);
							}, 250);
						}}
						className='Bottle'
						src={vodka}
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='gin'>
						GIN
					</h3>
					<img
						onClick={() => {
							filterDrink('gin');
							setTimeout(function () {
								window.scrollTo(0, 850);
							}, 250);
						}}
						className='Bottle'
						src={gin}
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='scotch'>
						SCOTCH
					</h3>
					<img
						onClick={() => {
							filterDrink('scotch');
							setTimeout(function () {
								window.scrollTo(0, 850);
							}, 250);
						}}
						className='Bottle'
						src={scotch}
						alt=''
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='bourbon'>
						BOURBON
					</h3>
					<img
						onClick={() => {
							filterDrink('bourbon');
							setTimeout(function () {
								window.scrollTo(0, 850);
							}, 250);
						}}
						className='Bottle'
						src={bourbon}
						alt='bottle'
					/>
				</div>
			</div>

			<div className='drink-list'>
				{drinksData.map((element) => (
					<Link
						key={element.idDrink}
						to={{
							pathname: '/cocktail/' + element.strDrink,
							state: { idDrink: element.idDrink }
						}}>
						<div className='cocktail-list-name'>{element.strDrink}</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Drinks;
