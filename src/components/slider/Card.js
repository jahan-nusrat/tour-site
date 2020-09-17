import React from 'react';

const Card = ({ properties }) => {
	const { name, url, id } = properties;
	return (
		<div id={`card-${id}`} className="col-lg-4">
			<div className="card">
				<div className="card-body">
					<img src={url} alt={name} className="img-fluid" />
					<p className="card-title">{name}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
