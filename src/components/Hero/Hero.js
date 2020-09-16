import React, { useContext } from 'react';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/FakeData';

const Hero = () => {
	const [ hero, setHero ] = useContext(UserContext);
	function truncate (str, n) {
		return str.length > n ? str.substr(0, n - 1) + '....' : str;
	}
	return (
		<div className="hero-container">
			<div className="hero-info">
				<h1>{hero.name}</h1>
				<p>{truncate(hero.info, 250)}</p>
			</div>
			<div className="hero-img">
				{fakeData.map((data) => {
					return (
						<div key={data.id}>
							<img src={data.url} alt={data.name} />
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Hero;