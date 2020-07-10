import React from 'react';
import QuotesCard from '../QuotesCard';
import { useSelector, useDispatch } from 'react-redux';
import { getQuotes } from '../../utils/redux/actions';

// component that show list for each quotes that will shown
export default function QuotesList(props) {
	const { quotes, quotesLoad } = useSelector((state) => state);
	const dispatch = useDispatch();
	return (
		<div>
			<button className="btn btn-primary rounded-pill shadow-sm" onClick={(e) => dispatch(getQuotes())}>
				Load another Quotes
			</button>
			{quotesLoad ? (
				<h6 className="text-center text-muted mt-4">Loading...</h6>
			) : (
				quotes.map((d, i) => <QuotesCard {...d} key={i} />)
			)}
		</div>
	);
}
