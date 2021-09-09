import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cocktail from '../Components/Cocktail/Cocktail';
import Drinks from '../Components/Drinks/Drinks';
import About from '../Components/About/About';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
				<Route path='/drinks'>
					<Drinks />
				</Route>
				<Route path='/about'>
					<About />
				</Route>
				<Route
					path='/cocktail/:cocktail'
					render={(routerProps) => <Cocktail {...routerProps} />}
				/>
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
