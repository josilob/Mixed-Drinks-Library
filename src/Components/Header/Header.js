import React from 'react';
import Nav from '../Nav/Nav';
import './Header.css';
import cheers from '../../images/cheers.png';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className='Header'>
			<Link to='/'>
				<img className='cheers' src={cheers} alt='cheers' />
			</Link>
			<h1 className='header-title'>Mixed Drinks Library</h1>
			<Nav />
		</div>
	);
}

export default Header;
