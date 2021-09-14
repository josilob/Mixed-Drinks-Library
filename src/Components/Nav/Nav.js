import React, { useState, useEffect } from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import cheers from '../../images/cheers.png';
import './Nav.css';

function Nav() {
	const [click, setClick] = useState(false);
	const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));

	const location = useLocation();
	const history = useHistory();

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	const logout = () => {
		localStorage.removeItem('profile');
		setUser(null);
		history.push('/');
	};
	// console.log(user);

	useEffect(() => {
		const token = user?.token;
		const parsedUser = JSON.parse(localStorage?.getItem('profile'))?.data;
		// check for JWT
		setUser(parsedUser);
	}, [location]);

	const authJSX = user ? (
		<li className='nav-item' onClick={(closeBurger, logout)}>
			<Link to='/form'>Logout </Link>
		</li>
	) : (
		<li className='nav-item' onClick={closeBurger}>
			<Link to='/form'>Sign In/Up </Link>
		</li>
	);

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
					<Link to='/drinks'>Cocktails</Link>
				</li>
				{authJSX}
			</ul>

			<i
				className={click ? 'fas fa-times' : 'fas fa-bars'}
				onClick={handleClick}
			/>
		</nav>
	);
}

export default Nav;
