import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import cheers from '../../images/cheers.png';
import './Nav.css';

function Nav(props) {
	const { user, setUser } = props;
	const [click, setClick] = useState(false);
	const history = useHistory();

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	const logout = () => {
		sessionStorage.removeItem('profile');
		setUser(null);
		setClick(false);
		history.push('/');
	};

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
