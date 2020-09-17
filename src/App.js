import React from 'react';
import Slider from './components/Slider';
import fakeData from './fakeData/FakeData';

const App = () => {
	console.log(fakeData);
	return (
		<div>
			<h2>I am home</h2>
			<Slider />
		</div>
	);
};

export default App;
