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
				setDrinksData(data.drinks);
			});
	};

	return (
		<div className='Drinks'>
			<div className='drinks-intro'>
				<h2 className='instruction'>
					Choose your favorite spirit below and our bartender will come up with
					an idea!
				</h2>
				<h2>Cheers!</h2>
			</div>
			<div className='bottles'>
				<div className='bottle-div'>
					<h3 className='drink-type' id='vodka'>
						VODKA
					</h3>
					<img
						onClick={() => filterDrink('vodka')}
						className='Bottle'
						src='https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/09/8686-ABSOLUT-VODKA-w.png'
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='gin'>
						GIN
					</h3>
					<img
						onClick={() => filterDrink('gin')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BEEF005.png'
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='tequila'>
						TEQUILA
					</h3>
					<img
						onClick={() => filterDrink('tequila')}
						className='Bottle'
						src='https://cdn.shopify.com/s/files/1/1531/2799/products/JoseCuervo_Reposado_fae752a8-6806-4ffc-9e71-59d4afa57524_grande.png?v=1597638393'
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='bourbon'>
						BOURBON
					</h3>
					<img
						onClick={() => filterDrink('bourbon')}
						className='Bottle'
						src='https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/09/7735-MAKERS-MARK-copy-w.png'
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='rum'>
						RUM
					</h3>
					<img
						onClick={() => filterDrink('rum')}
						className='Bottle'
						src='https://www.houseoftownend.com/Content/Images/Products/BACA020.png'
						alt='bottle'
					/>
				</div>

				<div className='bottle-div'>
					<h3 className='drink-type' id='scotch'>
						SCOTCH
					</h3>

					<img
						onClick={() => filterDrink('scotch')}
						className='Bottle'
						src='https://d3czfiwbzom72b.cloudfront.net/wp-content/uploads/2018/09/002464-DEWAR-S-WHITE-LABEL-BLENDED-SCOTCH-w.png'
						alt=''
					/>
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
						<div className='cocktail-list-name'>{element.strDrink}</div>
					</Link>
				))}
			</div>
		</div>
	);
}
export default Drinks;
