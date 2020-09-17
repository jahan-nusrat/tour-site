import React, { useContext } from 'react';
import { UserContext } from '../../App';

const RoomDetails = ({ data }) => {
	const [ hero, setHero ] = useContext(UserContext);
	console.log(data);
	return (
		<div className="container">
			<div className="row justify-content-center">
				<div className="col-lg-6">
					<div className="row">
						<div className="col-lg-6">
							<img src={data.img} alt="" />
						</div>
						<div className="col-lg-6">
							<h3>{data.name}</h3>
							<p>{data.info}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RoomDetails;
