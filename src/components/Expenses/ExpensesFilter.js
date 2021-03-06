import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
	const dropdownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value);
	};
	const clearListHandler = (event) => {
		console.log(`hello from expensesFilter`);
		props.onClearList();
	};

	return (
		<div className="expenses-filter">
			<div className="expenses-filter-left">
				<button className="delete-list-button" onClick={clearListHandler}>Ryd Liste</button>
			</div>
			<div>
				<div className="expenses-filter__control" >
					<label>Filtrér efter år</label>
					<select value={props.selected} onChange={dropdownChangeHandler}>
						<option value="2022">2022</option>
						<option value="2021">2021</option>
						<option value="2020">2020</option>
						<option value="2019">2019</option>
						<option value="2018">2018</option>
						<option value="2017">2017</option>
					</select>
				</div>
			</div>
		</div>
	);
};

export default ExpensesFilter;
