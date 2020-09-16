import React, { useContext } from 'react';
import './hero.css';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/FakeData';
import { Link } from 'react-router-dom';
import { HeroStyle } from '../../styled-components/HomeSTyle';

const Hero = () => {
	const [ hero, setHero ] = useContext(UserContext);
	function truncate (str, n) {
		return str.length > n ? str.substr(0, n - 1) + '....' : str;
	}

	const handleClick = (data) => {
		setHero({
			name   : data.name,
			info   : data.info,
			img    : data.img,
			active : true
		});
	};

	return (
		<HeroStyle className="hero-container">
			<div className="hero-info">
				<h1>{hero.name}</h1>
				<p>{truncate(hero.info, 250)}</p>
				<Link to="/booking">
					<button>Booking</button>
				</Link>
			</div>
			<div className="hero-img">
				{fakeData.map((data) => {
					return (
						<div key={data.id} onClick={() => handleClick(data)}>
							<img src={data.url} alt={data.name} />
						</div>
					);
				})}
			</div>
		</HeroStyle>
	);
};

export default Hero;
