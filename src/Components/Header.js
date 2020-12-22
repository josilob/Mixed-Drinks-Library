import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<img
					src='../Components/images/cheers.png'
					alt='cheers'
					className='cheers'
				/>
			</Link>
			<h1 className='header-title'>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
