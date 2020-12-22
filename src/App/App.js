import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header';
import Home from '../Components/Home';
import Footer from '../Components/Footer';
import Cocktail from '../Components/Cocktail';
import Drinks from '../Components/Drinks';
import About from '../Components/About';

function App() {
	return (
		<>
			<Header />
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
		</>
	);
}

export default App;

