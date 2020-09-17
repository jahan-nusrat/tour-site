import React, { useContext } from 'react';
import { UserContext } from '../../App';
import fakeData from '../../fakeData/FakeData';
import RoomDetails from './RoomDetails';

const HotelRoom = () => {
	const [ hero, setHero ] = useContext(UserContext);
	let hotelRoom = fakeData.filter((hotel) => {
		return hotel.id === hero.id;
	});
	console.log(hero, hotelRoom);
	return (
		<div>
			<p>Stay in {hero.name}</p>
			{hotelRoom[0].hotels.map((data) => {
				return <RoomDetails key={data.name} data={data} />;
			})}
		</div>
	);
};

export default HotelRoom;
