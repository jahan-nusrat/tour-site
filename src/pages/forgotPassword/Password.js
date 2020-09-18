import React, { useState } from 'react';
import './password.css';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { useHistory } from 'react-router-dom';
import firebaseConfig from '../../components/firebase/firebase.config';
import logo from '../../Image/black.png';
import Navigation from '../../components/nav/Navigation';

const Password = () => {
	const history = useHistory();
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const [ email, setEmail ] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		firebase
			.auth()
			.sendPasswordResetEmail(email)
			.then(() => {
				history.push('/login');
			})
			.catch((err) => {
				console.error(err.message);
			});
	};
	return (
		<div className="password">
			<div className="container ">
				<Navigation logo={logo} />
				<div className="row justify-content-center align-items-center">
					<div className="col-md-5 form-level">
						<form onSubmit={handleSubmit}>
							<div className="form-group col-md-10 my-4">
								<input
									type="email"
									name="email"
									onChange={(e) => setEmail(e.target.value)}
									value={email}
									placeholder="Email"
									className="form-control"
									required
								/>
							</div>
							<div className="col-md-10 my-3">
								<button className="btn btn-reset">Reset</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Password;
