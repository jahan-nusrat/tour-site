import React from 'react';

const Card = ({ properties, data }) => {
	const { property } = data;
	const { name, url, id } = properties;
	console.log(property);
	return (
		<div id={`card-${id}`} className="card">
			<img src={url} alt={name} />
			<div className="details">
				<span className="index">{id + 1}</span>
				<p className="location">{name}</p>
			</div>
		</div>
	);
};

export default Card;
