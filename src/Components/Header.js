import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<i className='fas fa-glass-martini-alt'></i>
			</Link>
			<h1 className='header-title'>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
