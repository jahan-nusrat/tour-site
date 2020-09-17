import React from 'react';
import './nav.css';

const Navigation = ({ logo }) => {
	return (
		<nav className="container py-2">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2">
					<img src={logo} alt="logo" className="img-fluid logo" />
				</div>
				<div className="col-lg-4">
					<input class="form-control" type="text" />
				</div>

				<div className="col-lg-5">
					<ul className="nav">
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
							<a className="login" href="#/login">
								Login
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
