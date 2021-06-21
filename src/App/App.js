import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cocktail from '../Components/Cocktail/Cocktail';
import Drinks from '../Components/Drinks/Drinks';
import About from '../Components/About/About';

function App() {
	return (
		<React.Fragment>
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
		</React.Fragment>
	);
}

export default App;
