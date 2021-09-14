import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cocktail from '../Components/Cocktail/Cocktail';
import Drinks from '../Components/Drinks/Drinks';
import Form from '../Components/Form/Form';

function App() {
	return (
		<React.Fragment>
			<Nav />
			<Switch>
				<Route exact path='/' component={Home} />
				<Route path='/drinks' component={Drinks} />
				<Route path='/form' component={Form} />
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
