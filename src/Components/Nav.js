import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const closeBurger = () => setClick(false);

	return (
		<nav className='navbar'>
			<div className='menu-icon' onClick={handleClick}>
				<i className={click ? 'fas fa-times' : 'fas fa-bars'} />
			</div>
			<ul className={click ? 'nav-menu active' : 'nav-menu'}>
				<li className='nav-item'>
					<Link to='/' className='nav-links' onClick={closeBurger}>
						Home
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/drinks' className='nav-links' onClick={closeBurger}>
						Cocktails
					</Link>
				</li>
				<li className='nav-item'>
					<Link to='/about' className='nav-links' onClick={closeBurger}>
						About
					</Link>
				</li>
			</ul>{' '}
		</nav>
	);
}

export default Nav;
