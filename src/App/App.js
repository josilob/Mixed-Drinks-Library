import React, { useState, useEffect } from 'react';
import './App.css';
import { Route, Switch, useLocation } from 'react-router-dom';
import Nav from '../Components/Nav/Nav';
import Home from '../Components/Home/Home';
import Footer from '../Components/Footer/Footer';
import Cocktail from '../Components/Cocktail/Cocktail';
import Drinks from '../Components/Drinks/Drinks';
import Form from '../Components/Form/Form';

function App() {
	const [isSignup, setIsSignup] = useState(false);
	const [user, setUser] = useState(null);
	const [drinksData, setDrinksData] = useState([]);
	const location = useLocation();
	const userID = JSON.parse(sessionStorage.getItem('profile'))?.userID;

	useEffect(() => {
		const parsedUser = JSON.parse(sessionStorage.getItem('profile'))?.username;
		// check for JWT
		setUser(parsedUser);
	}, [location]);

	return (
		<React.Fragment>
			<Nav user={user} setUser={setUser} />
			<Switch>
				<Route exact path='/' render={() => <Home setIsSignup={setIsSignup} />} />
				<Route
					path='/drinks'
					render={() => (
						<Drinks
							user={user}
							userID={userID}
							drinksData={drinksData}
							setDrinksData={setDrinksData}
						/>
					)}
				/>
				<Route
					path='/form'
					render={() => <Form isSignup={isSignup} setIsSignup={setIsSignup} />}
				/>
				<Route
					path='/cocktail/:cocktail'
					render={() => <Cocktail userID={userID} location={location} />}
				/>
			</Switch>
			<Footer />
		</React.Fragment>
	);
}

export default App;
