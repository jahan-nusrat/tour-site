import React, { useContext } from 'react';
import { UserContext } from '../App';

const Login = () => {
	const [ loggedIn, setLoggedIn ] = useContext(UserContext);

	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="exampleInputEmail1">Email address</label>
					<input type="email" className="form-control" aria-describedby="emailHelp" />
					<small id="emailHelp" className="form-text text-muted">
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className="form-group">
					<label htmlFor="exampleInputPassword1">Password</label>
					<input type="password" className="form-control" id="exampleInputPassword1" />
				</div>
				<button>Sign In</button>
			</form>
		</div>
	);
};

export default Login;
