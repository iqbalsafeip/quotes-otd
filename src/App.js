import React from 'react';
import './App.css';

import { BrowserRouter, Switch } from 'react-router-dom';

import { Home, Create } from './pages';

import LayoutRoute from './components/LayoutRoute';

function App() {
	return (
		<React.Fragment>
			<BrowserRouter>
				<Switch>
					<LayoutRoute exact path="/post" component={Create} />
					<LayoutRoute exact path="/" component={Home} />
				</Switch>
			</BrowserRouter>
		</React.Fragment>
	);
}

export default App;
