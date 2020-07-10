import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { insertQuotes } from '../../utils/redux/actions';
import moment from 'moment';

// component form that for handling all the form for creating an quotes
export default function Form(props) {
	const dispatch = useDispatch();
	const { user } = useSelector((state) => state);
	const [ loading, setLoading ] = useState(false);
	// initial state
	const [ data, setData ] = useState({
		authorField: {
			value: '',
			isValid: false
		},
		quotesField: {
			value: '',
			isValid: false,
			max: 3000
		},
		tagsField: {
			value: ''
		}
	});

	function handleChange(value, field) {
		// handle change for each field
		setData({
			...data,
			[field]: {
				...data[field],
				value,
				isValid: field === 'authorField' ? value.length > 5 : field === 'quotesField' ? value.length > 30 : true
			}
		});
	}

	function handleSubmit(e) {
		// submit handle and insert to database
		e.preventDefault();
		const { authorField, quotesField, tagsField } = data;
		if (authorField.isValid && quotesField.isValid && tagsField.value.length > 0) {
			setLoading(true);

			const data = {
				quotes: quotesField.value,
				author: authorField.value,
				tags: tagsField.value,
				createdAt: moment().format('MMM Do YYYY'),
				postedBy: user.displayName
			};
			dispatch(insertQuotes(data)).then((res) => {
				// reset form when the quotes is succesfully created
				setLoading(false);
				setData({
					authorField: {
						value: '',
						isValid: false
					},
					quotesField: {
						value: '',
						isValid: false,
						max: 3000
					},
					tagsField: {
						value: ''
					}
				});
			});
		}
	}

	return (
		<form className="card card-body shadow-sm rounded mt-3" onSubmit={handleSubmit}>
			<div className="mb-3">
				<label htmlFor="exampleFormControlInput1" className="form-label">
					Author Name
				</label>
				<input
					type="text"
					className={`form-control ${data.authorField.value.length > 0
						? data.authorField.isValid ? 'is-valid' : 'is-invalid'
						: ''}`}
					id="exampleFormControlInput1"
					placeholder="Author Names Here..."
					value={data.authorField.value}
					onChange={(e) => handleChange(e.target.value, 'authorField')}
				/>
				<div className="valid-feedback">Looks good!</div>
				<div className="invalid-feedback">minimum 5 character!</div>
			</div>
			<div className="mb-3">
				<label htmlFor="tags" className="form-label">
					Tags
				</label>
				<input
					type="text"
					className={`form-control`}
					id="exampleFormControlInput1"
					placeholder="ex. Sad, Motivate"
					value={data.tagsField.value}
					onChange={(e) => handleChange(e.target.value, 'tagsField')}
				/>
			</div>
			<div className="mb-3">
				<div className="d-flex flex-row justify-content-between">
					<label htmlFor="exampleFormControlTextarea1" className="form-label">
						Quotes
					</label>
					<span className="text-muted">
						{data.quotesField.value.length}/{data.quotesField.max}
					</span>
				</div>
				<textarea
					className={`form-control ${data.quotesField.value.length > 0
						? data.quotesField.isValid ? 'is-valid' : 'is-invalid'
						: ''}`}
					id="exampleFormControlTextarea1"
					value={data.quotesField.value}
					rows="3"
					maxLength={data.quotesField.max}
					onChange={(e) => handleChange(e.target.value, 'quotesField')}
					required
					placeholder="Your Quotes here..."
				/>
				<div className="valid-feedback">Looks good!</div>
				<div className="invalid-feedback">minimum 30 character!</div>
			</div>
			<button type="submit" className="btn btn-primary rounded-pill col-3" disabled={loading}>
				Send
			</button>
		</form>
	);
}
