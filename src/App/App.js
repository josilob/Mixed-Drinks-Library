import React, { useState } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cocktail from '../Components/Cocktail/Cocktail';
import Drinks from '../Components/Drinks/Drinks';
import Form from '../Components/Form/Form';

function App() {
	const [isSignup, setIsSignup] = useState(false);

	return (
		<React.Fragment>
			<Nav />
			<Switch>
				<Route exact path='/' render={() => <Home setIsSignup={setIsSignup} />} />
				<Route path='/drinks' component={Drinks} />
				<Route
					path='/form'
					render={() => <Form isSignup={isSignup} setIsSignup={setIsSignup} />}
				/>
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
