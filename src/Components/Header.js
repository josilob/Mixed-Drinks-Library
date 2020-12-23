import React from 'react';
import Nav from './Nav';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<img
					className='cheers'
					src={'https://i.imgur.com/8cJ05ib.png'}
					alt='cheers'
				/>
			</Link>
			<h1 className='header-title'>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
