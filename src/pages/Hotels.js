import React, { useContext, useEffect, useState } from 'react';
import './hotel.css';
import { useParams } from 'react-router-dom';
import { UserContext } from '../App';
import fakeData from '../fakeData/FakeData';
import RoomDetails from './RoomDetails';
import logo from '../Image/black.png';
import Navigation from '../components/nav/Navigation';

const Hotels = () => {
	let { slug } = useParams();
	console.log(slug);
	const [ bookingInfo, setBookingInfo ] = useContext(UserContext);
	const [ placeHotels, setPlaceHotels ] = useState([]);

	useEffect(
		() => {
			const filterHotels = fakeData.filter((hotel) => hotel.slug === slug);
			console.log(filterHotels);
			const { hotels } = filterHotels[0];
			setPlaceHotels(hotels);
		},
		[ slug ]
	);
	console.log(slug);

	return (
		<div className="hotels">
			<div className="container">
				<Navigation logo={logo} />
				<hr />
				<div className="details">
					<p>252 stays Sep {bookingInfo.from} 3 guests</p>
					<h2>Stay in {`${slug.toUpperCase()}`}</h2>
				</div>
				<div className="row">
					<div className="room-details col-lg-7">
						{placeHotels.map((room) => {
							return <RoomDetails key={room.id} room={room} />;
						})}
					</div>
					<div className="map-details col-lg-5">
						<iframe
							title="Find Location"
							width="470"
							height="688"
							frameborder="0"
							src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCspGr1eo_7gDpc6NGHMplDVjRt1OZrDXI&q=${slug}`}
							allowfullscreen
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
