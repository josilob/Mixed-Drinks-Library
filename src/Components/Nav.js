import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<div className='Nav'>
			<div className='Links'>
				<Link to='/drinks'>Cocktails</Link>
				<Link to='/about'>About</Link>
			</div>
		</div>
	);
}

export default Nav;
