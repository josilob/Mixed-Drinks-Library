import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cheers from '../../images/cheers.png';
import './Nav.css';

function Nav() {
	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<nav className='navbar'>
			<Link to='/'>
				<img className='cheers' src={cheers} alt='cheers' />
			</Link>

			<h1 className='header-title'>Mixed Drinks Library</h1>

			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item' onClick={closeBurger}>
					<Link to='/'>Home</Link>
				</li>
				<li className='nav-item' onClick={closeBurger}>
					<Link className='mylink' to='/drinks'>
						Cocktails
					</Link>
				</li>
				<li className='nav-item' onClick={closeBurger}>
					<Link to='/about'>About</Link>
				</li>
			</ul>

			<i
				className={click ? 'fas fa-times' : 'fas fa-bars'}
				onClick={handleClick}
			/>
		</nav>
	);
}

export default Nav;
