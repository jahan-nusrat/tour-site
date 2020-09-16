import React from 'react';
import './nav.css';
import { Link } from 'react-router-dom';
import logo from '../../Image/Logo.png';

const Nav = () => {
	return (
		<nav>
			<div>
				<Link to="/">
					<img src={logo} alt="travel-guru" />
				</Link>
			</div>
			<div className="input">
				<input type="text" />
			</div>
			<div>
				<ul>
					<li>
						<a href="#/news">News</a>
					</li>
					<li>
						<a href="#/destination">Destination</a>
					</li>
					<li>
						<a href="#/blog">Blog</a>
					</li>
					<li>
						<a href="#/contact">Contact</a>
					</li>
					<li>
						<Link to="/login">Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Nav;
