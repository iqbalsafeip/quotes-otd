import React from 'react';
import { useSelector } from 'react-redux';

// component that show profile informations
export default function Profile(props) {
	const { user } = useSelector((state) => state);
	return (
		<div className="d-flex flex-row align-items-center mt-4">
			<img src={user.photoURL} alt="profile picture" className="rounded-circle mr-2" style={{ width: 40 }} />
			<h4>{user.displayName}</h4>
		</div>
	);
}
