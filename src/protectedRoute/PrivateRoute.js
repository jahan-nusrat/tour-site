import React from 'react';
import { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../App';

function PrivateRoute ({ children, ...rest }) {
	const [ loggedIn, setLoggedIn ] = useContext(UserContext);
	return (
		<Route
			{...rest}
			render={({ location }) =>
				loggedIn.email ? (
					children
				) : (
					<Redirect
						to={{
							pathname : '/login',
							state    : { from: location }
						}}
					/>
				)}
		/>
	);
}

export default PrivateRoute;
