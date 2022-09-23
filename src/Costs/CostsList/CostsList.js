import React from 'react';
import CostItem from '../CostItem/CostItem';
import './CostList.css';

const CostsList = props => {
	const { costs } = props;

	if (costs.length === 0) {
		return <h2 className='cost-list__fallback'>Нет данных</h2>;
	}

	return (
		<ul className='cost-list'>
			{costs.map(cost => (
				<CostItem key={cost.id} {...cost} />
			))}
		</ul>
	);
};

export default CostsList;
