import React from 'react';
import { useParams } from 'react-router-dom';

const Hotels = () => {
	const { slug } = useParams();
	return (
		<div>
			<h4>I am from hotels</h4>
		</div>
	);
};

export default Hotels;
