import React, { useContext } from 'react';
import Nav from '../components/Nav/Nav';
import { BookingStyle } from '../styled-components/BookStyle';
import BookDate from '../components/Booking/BookDate';
import { UserContext } from '../App';

const Booking = () => {
	const [ hero ] = useContext(UserContext);
	let styles = {
		backgroundImage  : `linear-gradient(0.12deg, #000000 0.1%, rgba(0, 0, 0, 0) 69.96%), url(${hero.img})`,
		backgroundRepeat : 'no-repeat'
	};
	return (
		<BookingStyle style={styles}>
			<Nav />
			<BookDate />
		</BookingStyle>
	);
};

export default Booking;
