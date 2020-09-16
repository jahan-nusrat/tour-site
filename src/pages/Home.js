import React, { useContext } from 'react';
import { UserContext } from '../App';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import '../components/Hero/hero.css';
import { Header } from '../styled-components/HomeSTyle';

const Home = () => {
	const [ hero ] = useContext(UserContext);
	let styles = {
		backgroundImage  : `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.55)), url(${hero.img})`,
		backgroundRepeat : 'no-repeat'
	};
	return (
		<Header className={hero.title} style={styles}>
			<Nav />
			<Hero />
		</Header>
	);
};

export default Home;
