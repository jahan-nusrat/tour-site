import React from 'react';
import { FaStar } from 'react-icons/fa';

const RoomDetails = ({ room }) => {
	return (
		<div className="row align-items-center my-4">
			<div className="col-lg-5">
				<img src={room.img} alt={room.name} className="img-fluid" />
			</div>
			<div className="col-lg-7 room-info">
				<h4>
					<strong>{room.name}</strong>
				</h4>
				<div className="d-flex description">
					<p>{room.guests} guests</p>
					<p>{room.bedrooms} bedrooms</p>
					<p>{room.beds} beds</p>
					<p>{room.baths} baths</p>
				</div>
				<p className="title">{room.info}</p>
				<p className="title">{room.facility}</p>
				<div className="room-bottom">
					<strong className="rating">
						<FaStar className="star" /> {room.ratings} (20)
					</strong>
					<strong>${room.price}</strong> /night <span>$167/total</span>
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
