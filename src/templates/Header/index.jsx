import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutAPI } from '../../utils/redux/actions';

export default function Header(props) {
	const isAuth = useSelector((state) => state.isAuth);
	const dispatch = useDispatch();
	return (
		<nav className="navbar navbar-light bg-light shadow-sm">
			<div className="container">
				<Link className="navbar-brand" to="/">
					Quotes Of The Day
				</Link>
				<Link className="ml-auto btn btn-success rounded-pill" to="/post">
					Post Your Quotes
				</Link>
				{isAuth && (
					<button className="btn btn-danger rounded-pill ml-2" onClick={(e) => dispatch(logoutAPI())}>
						Sign out
					</button>
				)}
			</div>
		</nav>
	);
}
