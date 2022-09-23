import React, { useState } from 'react';
import './CostForm.css';

const CostForm = ({ onCloseForm, onAddCost }) => {
	// state = состояние
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');
	const [date, setDate] = useState('');

	const closeForm = e => {
		e.preventDefault();
		onCloseForm();
	};

	function changeName(text) {
		setName(text);
		console.log(name, 'name');
	}
	function changePrice(price) {
		setPrice(price);
		console.log(name, 'name');
	}
	function changeDate(date) {
		setDate(date);
		console.log(name, 'name');
	}

	function addNewCost(e) {
		e.preventDefault();
		const data = {
			id: Math.random().toString(), //0 < 0.99568464654
			name,
			price,
			date: new Date(date),
		};
		console.log(date, 'form');
		console.log(data, 'form');
		onAddCost(data);
		onCloseForm();
	}
	return (
		<div>
			<form onSubmit={addNewCost}>
				<div className='new-cost__controls'>
					<div>
						<div className='new-cost__control'>
							<div>
								<label>Название</label>
								<input type='text' onChange={e => changeName(e.target.value)} />
							</div>
							<div>
								<label>Сумма</label>
								<input
									type='text'
									value={price}
									onChange={e => changePrice(e.target.value)}
								/>
							</div>
							<div>
								<label>Дата</label>
								<input type='date' onChange={e => changeDate(e.target.value)} />
							</div>
						</div>
						<div className='new-cost__actions'>
							<button type='submit'>Добавить Расход</button>
							<button
								onClick={event => {
									closeForm(event);
								}}>
								Отмена
							</button>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default CostForm;
