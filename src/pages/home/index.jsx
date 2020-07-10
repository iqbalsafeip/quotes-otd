import React from 'react';
import QuotesList from '../../components/QuotesList';
import Profile from '../../components/Profile';
import { useSelector } from 'react-redux';

// home page
export default function Home() {
	const isAuth = useSelector((state) => state.isAuth);
	return (
		<div className="container h-screen">
			{/* the profile will shown when user is authenticated */}
			{isAuth && <Profile />}
			<h1 className="text-center mt-3" style={{ fontFamily: 'serif' }}>
				Quotes For Your Day
			</h1>
			<hr />
			<QuotesList />
		</div>
	);
}
