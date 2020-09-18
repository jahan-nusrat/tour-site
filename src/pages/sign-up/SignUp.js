import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../components/nav/Navigation';
import facebook from '../../Icon/fb.png';
import google from '../../Icon/google.png';
import logo from '../../Image/black.png';

const SignUp = () => {
	const formSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="container login">
			<Navigation logo={logo} />
			<div className="row justify-content-center align-items-center">
				<div className="col-md-5 form-box">
					<h1>Create an Account</h1>
					<form className="mt-4" onSubmit={formSubmit}>
						<div className="form-group col-md-12">
							<input
								type="text"
								className="form-control"
								name="firstName"
								placeholder="first Name"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="text"
								className="form-control"
								name="lastName"
								placeholder="Last Name"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="email"
								className="form-control"
								name="email"
								placeholder="Username or Email"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="password"
								name="password"
								className="form-control"
								placeholder="password"
								required
							/>
						</div>
						<div className="form-group col-md-12">
							<input
								type="password"
								name="confirmPass"
								className="form-control"
								placeholder="password"
								required
							/>
						</div>

						<div className="col-md-12 mt-3 mb-4">
							<input className="btn form-control btn-custom" type="submit" value="Create an account" />
						</div>
						<p className="text-center mt-3">
							Already have an account?
							<Link to="/login">Log In</Link>
						</p>
					</form>
				</div>

				<div className="col-md-8 text-center mt-3">
					<div>
						<button className="btn btn-social">
							<img className="social-logo" src={facebook} alt="fb" />
							Continue with Facebook
						</button>
					</div>
					<div className="mt-3">
						<button className="btn btn-social">
							<img className="social-logo" src={google} alt="google" />
							Continue with Google
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUp;
