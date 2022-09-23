import React from 'react';
import './DiagramBar.css';

const DiagramBar = ({ label, maxVal, value }) => {
	let maxHeight = '0%';
	if (maxVal > 0) {
		// value = 12000 / 12000 = 1 * 100 = 100%
		maxHeight = Math.round((value / maxVal) * 100) + '%';
	}
	return (
		<div className='diagram-bar'>
			<div className='diagram-bar__inner'>
				<div className='diagram-bar__fill' style={{ height: maxHeight }}></div>
			</div>

			<div className='diagram-bar__label'>{label}</div>
		</div>
	);
};

export default DiagramBar;
