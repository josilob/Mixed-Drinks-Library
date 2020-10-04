import React from 'react';
import Nav from './Nav';
import { Route, Link, Switch } from 'react-router-dom';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<i className='fas fa-glass-martini-alt'></i>
			</Link>
			<h1>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
