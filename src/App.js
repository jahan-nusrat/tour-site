import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Booking from './pages/Booking';
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import NotFound from './pages/NotFound';

export const UserContext = createContext();

const App = () => {
	const [ bookingInfo, setBookingInfo ] = useState({});
	return (
		<UserContext.Provider value={[ bookingInfo, setBookingInfo ]}>
			<Router>
				<Switch>
					<Route exact={true} path="/">
						<Home />
					</Route>
					<Route exact path="/:slug">
						<Booking />
					</Route>

					<Route path="/:slug/hotels">
						<Hotels />
					</Route>

					<Route path="*">
						<NotFound />
					</Route>
				</Switch>
			</Router>
		</UserContext.Provider>
	);
};

export default App;
