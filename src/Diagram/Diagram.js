import React from 'react';
import './Diagram.css';
import DiagramBar from './DiagramBar';

const Diagram = props => {
	const dataValues = props.data?.map(val => val.value);
	const maxSumm = Math.max(...dataValues);

	return (
		<div className='diagram'>
			{props.data.map(item => (
				<DiagramBar
					key={item.label}
					value={item.value}
					label={item.label}
					maxVal={maxSumm}
				/>
			))}
		</div>
	);
};

export default Diagram;
