import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<img
					src='https://static.thenounproject.com/png/95369-200.png'
					alt='cheers'
					className='cheers '
				/>
			</Link>
			<h1 className='header-title'>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
