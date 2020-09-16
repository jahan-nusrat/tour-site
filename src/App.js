import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact={true} path="/">
					<Home />
				</Route>
				<Route path="/booking">
					<Booking />
				</Route>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/search">
					<Search />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
