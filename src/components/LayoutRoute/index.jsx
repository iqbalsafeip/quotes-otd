import React from 'react';

import { Route } from 'react-router-dom';
import Header from '../../templates/Header';
import Footer from '../../templates/Footer';

// Layoute route for adding component header and footer for each route that use layoutroute
export default function LayoutRoute({ component: Component, ...props }) {
	return (
		<Route
			{...props}
			render={() => (
				<React.Fragment>
					<Header />
					<Component />
					<Footer />
				</React.Fragment>
			)}
		/>
	);
}
