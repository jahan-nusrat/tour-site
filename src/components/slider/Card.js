import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ properties }) => {
	const { name, url, id, slug } = properties;
	return (
		<div id={`card-${id}`} className="card-box col-lg-4">
			<Link to={`/${slug}`}>
				<div className="card">
					<div className="card-body">
						<img src={url} alt={name} className="img-fluid" />
						<p className="card-title">{name}</p>
					</div>
				</div>
			</Link>
		</div>
	);
};

export default Card;
