import React, { useContext } from 'react';
import { UserContext } from '../App';
import Hero from '../components/Hero/Hero';
import Nav from '../components/Nav/Nav';
import '../components/Hero/hero.css';
import { Header } from '../styled-components/HomeSTyle';

const Home = () => {
	const [ hero ] = useContext(UserContext);
	let styles = {
		backgroundImage  : `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${hero.img})`,
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
