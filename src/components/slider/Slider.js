import React, { Component } from 'react';
import './slider.css';
import { Link } from 'react-router-dom';
import data from '../../fakeData/FakeData';
import Card from './Card';
import { FaAngleLeft, FaAngleRight, FaArrowRight } from 'react-icons/fa';

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

	truncate = (str, n) => {
		return str.length > n ? str.substr(0, n - 1) + '.......' : str;
	};

	render () {
		const { properties, property } = this.state;
		return (
			<div className="container hero-box">
				<div className="row align-items-center">
					<div className="col-lg-4 px-3">
						<h1>{property.name}</h1>
						<p>{this.truncate(property.info, 250)}</p>
						<Link to={`/${property.slug}`}>
							<button className="btn btn-btn">
								Booking <FaArrowRight />
							</button>
						</Link>
					</div>
					<div className="col-lg-8 px-5">
						<div className={`card-slider active-slide-${property.id}`}>
							<div className="slider-wrapper row">
								{properties.map((property) => <Card key={property.id} properties={property} />)}
							</div>
						</div>
					</div>
				</div>
				<div className="angle">
					<button className="prev" onClick={this.prevProperty} disabled={property.id === 0}>
						<FaAngleLeft className="left" />
					</button>
					<button
						className="next"
						onClick={this.NextProperty}
						disabled={property.id === properties.length - 1}
					>
						<FaAngleRight className="right" />
					</button>
				</div>
			</div>
		);
	}
}

export default Slider;
