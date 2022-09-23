import React, { useState } from 'react';
import CostForm from '../Costs/CostForm/CostForm';
import './NewCost.css';

const NewCost = props => {
	// es6 Деструктри
	const [isFormVisible, setIsFormVisible] = useState(false);

	const closeForm = () => {
		setIsFormVisible(false);
	};

	return (
		<div className='new-cost'>
			<button onClick={() => setIsFormVisible(true)}>
				Добавить Новый Расход
			</button>
			{/*   false    И  comp = true {} */}
			{isFormVisible && (
				<CostForm onAddCost={props.onAddCost} onCloseForm={closeForm} />
			)}
		</div>
	);
};

export default NewCost;
