import React, { Component } from 'react';
import './slider.css';
import data from '../fakeData/FakeData';
import Card from './Card';

class Slider extends Component {
	state = {
		properties : data,
		property   : data[0]
	};

	NextProperty = () => {
		const newId = this.state.property.id + 1;
		this.setState({
			property : data[newId]
		});
	};

	prevProperty = () => {
		const newId = this.state.property.id - 1;
		this.setState({
			property : data[newId]
		});
	};

	render () {
		const { properties, property } = this.state;
		return (
			<div>
				<div className="page">
					<div className={`card-slider active-slide-${property.id}`}>
						<div className="slider-wrapper">
							{properties.map((property) => (
								<Card key={property.id} properties={property} data={this.state} />
							))}
						</div>
					</div>
				</div>
				<div>
					<button onClick={this.prevProperty} disabled={property.id === 0}>
						Previous
					</button>
					<button onClick={this.NextProperty} disabled={property.id === properties.length - 1}>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default Slider;
//{ transform: `translateX(-${property.id * (100 / properties.length)}%)` }
