import React, { useEffect, useReducer, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './booking.css';
import Navigation from '../components/nav/Navigation';
import { useStateValue } from '../components/reducer/StateProvider';
import fakeData from '../fakeData/FakeData';
import logo from '../Image/white.png';

function Booking () {
	const { slug } = useParams();
	const [ { bookingInfo }, dispatch ] = useStateValue();

	const [ bookPlace, setBookPlace ] = useState({
		origin      : '',
		destination : '',
		from        : '',
		to          : ''
	});

	const [ place, setPlace ] = useState({
		name : '',
		info : ''
	});

	useEffect(() => {
		const filterPlace = fakeData.filter((property) => {
			return property.slug === slug;
		});
		const { name, info } = filterPlace[0];
		setPlace({
			name,
			info
		});
		setBookPlace({
			...bookPlace,
			destination : name
		});
	}, []);

	const handleDate = (e) => {
		setBookPlace({
			...bookPlace,
			[e.target.name]: e.target.value
		});
	};

	const handleInput = (e) => {
		setBookPlace({
			...bookPlace,
			[e.target.name]: e.target.value
		});
	};

	const history = useHistory();
	const handleSubmit = (e) => {
		e.preventDefault();
		history.push(`/${slug}/hotels`);
	};

	const clickHandle = () => {
		dispatch({
			type : 'BOOKING-BUTTON',
			item : {
				...bookPlace
			}
		});
	};

	return (
		<div className="booking">
			<div className="container">
				<Navigation logo={logo} />
				<div className="booking-box row align-items-center justify-content-around">
					<div className="place-info col-lg-5">
						<h1>{place.name}</h1>
						<p>{place.info}</p>
					</div>
					<div className="col-lg-4 form-container">
						<form onSubmit={handleSubmit} className="row justify-content-center">
							<div className="form-group col-lg-10">
								<label htmlFor="origin">Origin</label>
								<input
									name="origin"
									value={bookPlace.origin}
									onChange={handleInput}
									type="text"
									className="form-control"
								/>
							</div>
							<div className="form-group col-lg-10">
								<label htmlFor="destination">Destination</label>
								<input
									name="destination"
									value={bookPlace.destination}
									type="text"
									className="form-control"
								/>
							</div>
							<div className="form-row justify-content-center">
								<div className="form-group col-lg-5 date">
									<label htmlFor="from">From</label>
									<input
										name="from"
										onChange={handleDate}
										value={bookPlace.from}
										type="date"
										className="form-control"
									/>
								</div>
								<div className="form-group col-lg-5 date">
									<label htmlFor="to">To</label>
									<input
										name="to"
										onChange={handleDate}
										value={bookPlace.to}
										type="date"
										className="form-control"
									/>
								</div>
							</div>
							<div className="col-lg-10">
								<input
									onClick={clickHandle}
									className="btn form-control btn-custom"
									type="submit"
									value="Start Booking"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Booking;
