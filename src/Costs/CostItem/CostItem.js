import React from 'react';
import CostDate from '../CostDate/CostDate';
import './CostItem.css';

const CostItem = props => {
	return (
		<div className='cost-item'>
			{/* <div>март Вторник 12 2019</div> */}
			<CostDate date={props.date} />
			<div className='cost-item__description'>
				<h2>{props.name}</h2>
				<p className='cost-item__price'>$ {props.price}</p>
			</div>
		</div>
	);
};

export default CostItem;
