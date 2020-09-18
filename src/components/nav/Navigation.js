import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserContext } from '../../App';
import './nav.css';
import firebaseConfig from '../firebase/firebase.config';

const Navigation = ({ logo }) => {
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}

	const [ loggedIn, setLoggedIn ] = useContext(UserContext);
	const handleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(function (res) {
				setLoggedIn({});
			})
			.catch(function (error) {
				console.log(error.message);
			});
	};
	return (
		<nav className="container py-2">
			<div className="row justify-content-between align-items-center">
				<div className="col-lg-2">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
				</div>
				<div className="col-lg-4">
					<input className="form-control" type="text" />
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
							{loggedIn.email ? (
								<Link to="/" onClick={handleSignOut}>
									Logout
								</Link>
							) : (
								<Link to="/login">Login</Link>
							)}
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
