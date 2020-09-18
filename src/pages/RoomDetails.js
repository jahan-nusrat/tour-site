import React from 'react';
import { FaStar } from 'react-icons/fa';

const RoomDetails = ({ room }) => {
	console.log(room);
	return (
		<div className="row align-items-center">
			<div className="col-lg-5">
				<img src={room.img} alt={room.name} className="img-fluid" />
			</div>
			<div className="col-lg-7">
				<h4>{room.name}</h4>
				<div className="d-flex">
					<p>{room.guests} guests</p>
					<p>{room.bedrooms} bedrooms</p>
					<p>{room.beds} beds</p>
					<p>{room.baths} baths</p>
				</div>
				<p>{room.info}</p>
				<p>{room.facility}</p>
				<div className="room-bottom">
					<strong>
						<FaStar /> {room.ratings} (20)
					</strong>
					<strong>${room.price}</strong>/night $167/total
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
