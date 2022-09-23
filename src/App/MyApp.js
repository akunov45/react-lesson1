import React, { useState } from 'react';
import NewCost from '../NewCost/NewCost';
import './MyApp.css';
import Costs from '../Costs/Costs';

const mockCosts = [
	{
		id: 1,
		name: 'Telephone',
		price: 700,
		date: new Date(2022, 2, 2),
	},
	{
		id: 2,
		name: 'laptop',
		price: 1200,
		date: new Date(2022, 2, 2),
	},
];

const MyApp = () => {
	const [costs, setCost] = useState(mockCosts);

	const addNewCost = data => {
		setCost(oldVal => {
			return [data, ...oldVal];
		});
	};

	return (
		<div className='app'>
			<NewCost onAddCost={addNewCost} />
			<Costs costs={costs} />
		</div>
	);
};

export default MyApp;
