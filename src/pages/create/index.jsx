import React from 'react';

import Form from '../../components/Form';
import { useSelector, useDispatch } from 'react-redux';
import { authUser } from '../../utils/redux/actions';

// page for creating a quotes
export default function Create() {
	const { isAuth, authLoad } = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<div className="container h-screen">
			{authLoad ? (
				<h6 className="text-center text-muted mt-4">Loading...</h6>
			) : isAuth ? (
				<Form />
			) : (
				// this component will shown when user is not authenticated
				<div className="mt-3 text-center">
					<button onClick={(e) => dispatch(authUser())} className="btn btn-danger rounded-pill">
						Login With Google
					</button>
				</div>
			)}
		</div>
	);
}
