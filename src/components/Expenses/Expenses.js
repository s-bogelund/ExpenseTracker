import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import "./Expenses.css";
import "./ExpensesList.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2022");

	const filteredExpenses = props.items.filter((item) => {
		return item.date.toString().includes(`${filteredYear}`);
	});

	console.log(filteredExpenses);
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const clearListHandler = () => {
		console.log(`hello from expenses`);
		props.onClearList();
	};

	const itemDeleteHandler = (title, amount) => {
		console.log(`${title} and ${amount}`);
		props.onDeleteItem(title, amount);
	};

	return (
		<div>
			<Card className="expenses">
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
					onClearList={clearListHandler}
				/>
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList
					items={filteredExpenses}
					onDeleteItem={itemDeleteHandler}
				/>
			</Card>
		</div>
	);
};

export default Expenses;
