import React from 'react';
import './home.css';
import Slider from '../components/slider/Slider';
import Navigation from '../components/nav/Navigation';
import logo from '../Image/white.png';

const Home = () => {
	return (
		<header>
			<Navigation logo={logo} />
			<Slider />
		</header>
	);
};

export default Home;
