import React from 'react';
import './CostFilter.css';

const CostFilter = () => {
	return (
		<div className='costs-filter'>
			<div className='costs-filter__control'>
				<label>Выбор по Году</label>
				<select>
					<option value='2019'>2019</option>
					<option value='2020'>2020</option>
					<option value='2021'>2021</option>
					<option value='2022'>2022</option>
				</select>
			</div>
		</div>
	);
};

export default CostFilter;
