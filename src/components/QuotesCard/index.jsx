import React from 'react';


// component that show informations about the quotes, such as author, tags, etc
const QuotesCard = (props) => {
	return (
		<div className="card card-body shadow-sm rounded-sm px-3 py-3 my-3">
			<figure>
				<blockquote className="blockquote">
					<p style={{ msWordBreak: 'break-all' }}>{props.quotes}</p>
				</blockquote>
				<figcaption className="blockquote-footer">
					By <cite title="Author">{props.author}</cite>
				</figcaption>
			</figure>
			<div className="d-flex flex-row justify-content-between">
				<div className="col-8">
					tags :
					{props.tags?.split(',').map((tag, i) => (
						<span key={i} className="bg-light rounded-pill mx-1">
							{tag}
						</span>
					))}
				</div>
					<p className="text-muted">Posted By {props.postedBy}, {props.createdAt}</p>
			</div>
		</div>
	);
};

export default QuotesCard;
