import React from 'react';
import CostFilter from './CostFilter/CostFilter';
import CostsDiagram from './CostsDiagram';
import CostsList from './CostsList/CostsList';
import './Costs.css';

const Costs = props => {
	const filteredCosts = props.costs.filter(cost => {
		return cost.date.getFullYear().toString() === '2022';
	});
	console.log(filteredCosts, 'filteredCosts');
	return (
		<div className='costs'>
			<CostFilter />
			<CostsDiagram costs={filteredCosts} />
			<CostsList costs={props.costs} />
		</div>
	);
};

export default Costs;
