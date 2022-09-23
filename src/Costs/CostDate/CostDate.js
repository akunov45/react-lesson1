import React from 'react';
import './CostDate.css';

const CostDate = props => {
	console.log(props.date, 'date');
	const date = new Date(props.date);
	let month = date.toLocaleString('ru', { month: 'long' });
	let day = date.toLocaleString('ru', { day: 'numeric' });
	let year = date.toLocaleString('ru', { year: 'numeric' });
	return (
		<div className='cost-date'>
			<div className='cost-date__month'>{month}</div>
			<div className='cost-date__day'>{day}</div>
			<div className='cost-date__year'>{year}</div>
		</div>
	);
};

export default CostDate;
