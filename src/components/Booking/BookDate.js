import React, { useContext, useState } from 'react';
import { UserContext } from '../../App';
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory } from 'react-router-dom';

const BookDate = () => {
	const [ hero, setHero ] = useContext(UserContext);
	const [ loggedIn ] = useContext(UserContext);
	const [ startDate, setStartDate ] = useState(new Date());
	const [ endDate, setEndDate ] = useState(new Date());
	const history = useHistory();
	console.log(loggedIn);
	const handleSubmit = (event) => {
		event.preventDefault();
		history.push('/search');
	};
	return (
		<div className="booking-container">
			<div className="booking-details">
				<h1>{hero.name}</h1>
				<p>{hero.info}</p>
			</div>
			<div>
				<form onSubmit={handleSubmit}>
					<Form.Group>
						<Form.Label>Origin</Form.Label>

						<Form.Control as="select" size="lg">
							<option>Dhaka</option>
							<option>Chittagong</option>
							<option>Rajshahi</option>
							<option>Khulna</option>
							<option>Barishal</option>
						</Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label>Destination</Form.Label>
						<Form.Control as="select">
							<option>{hero.name}</option>
						</Form.Control>
					</Form.Group>
					<div>
						<div>
							<label htmlFor="origin">From</label>
							<DatePicker selected={startDate} onChange={(date) => setStartDate(date)} required />
						</div>
						<div>
							<label htmlFor="origin">To</label>
							<DatePicker selected={endDate} onChange={(date) => setEndDate(date)} required />
						</div>
					</div>
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default BookDate;
