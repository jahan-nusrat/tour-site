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
	const [ bookingInfo, setBookingInfo ] = useContext(UserContext);
	const [ placeHotels, setPlaceHotels ] = useState([]);
	console.log(placeHotels);
	useEffect(() => {
		const filterHotels = fakeData.filter((hotel) => {
			return hotel.slug === slug;
		});
		const { hotels } = filterHotels[0];
		setPlaceHotels(hotels);
	}, []);

	return (
		<div className="hotels">
			<div className="container">
				<Navigation logo={logo} />
				<hr />
				<div className="details">
					<p>252 stays Sep {bookingInfo.from} 3 guests</p>
					<h2>Stay in {bookingInfo.destination}</h2>
				</div>
				<div className="row">
					<div className="room-details col-lg-7">
						{placeHotels.map((room) => {
							return <RoomDetails key={room.id} room={room} />;
						})}
					</div>
					<div className="map-details col-lg-5">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, vero dicta nobis quod,
							obcaecati natus repellendus consequuntur, nihil esse laboriosam iure similique doloremque ad
							enim eum debitis. Ipsa, omnis inventore?
						</p>
						{/* <iframe
							width="470"
							height="688"
							frameborder="0"
							src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyCspGr1eo_7gDpc6NGHMplDVjRt1OZrDXI&q=${bookingInfo.destination}`}
							allowfullscreen
						/> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotels;
