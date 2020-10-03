import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

function App() {
	return (
		<div className='App'>
			<Header />
			<Main />
			<Footer />
		</div>
	);
}

export default App;
