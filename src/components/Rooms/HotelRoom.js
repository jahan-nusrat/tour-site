import React, { useContext } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';
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
		<div className="container row">
			<div className="col-lg-6">
				<p>Stay in {hero.name}</p>
				{hotelRoom[0].hotels.map((data) => {
					return <RoomDetails key={data.name} data={data} />;
				})};
			</div>

			<div style={{ width: '300px', margin: 'auto', height: '300px' }} className="col-lg-6">
				<Map center={[ hero.lat, hero.long ]} zoom={10}>
					<TileLayer
						attribution="&copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
				</Map>
			</div>
		</div>
	);
};

export default HotelRoom;
