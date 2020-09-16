import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './app.css';
import Home from './pages/Home';
import Booking from './pages/Booking';
import Login from './pages/Login';
import Search from './pages/Search';
import NotFound from './pages/NotFound';
import cox from './Image/cox.png';
import Nav from './components/Nav/Nav';

export const UserContext = createContext();
const App = () => {
	const [ hero, setHero ] = useState({
		name : "COX'S BAZAR",
		info :
			'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',
		img  : cox
	});
	return (
		<UserContext.Provider value={[ hero, setHero ]}>
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
		</UserContext.Provider>
	);
};

export default App;
