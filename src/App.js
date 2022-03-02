import React, { useState } from "react";
import { myData } from "./data/dummyData";
import Card from "./components/UI/Card";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const [expenses, setExpenses] = useState(myData);

	const addExpenseHandler = (expense) => {
		setExpenses((prevExpenses) => {
			return [expense, ...prevExpenses];
		});
	};

	const clearListHandler = (expense) => {
		console.log(`hello from app`);
		setExpenses([]);
	};

	const deleteItemHandler = (title, amount) => {
		console.log(`${title} ${typeof amount} <------- id`);
		expenses.forEach((expense) => {
            if(expense.amount === amount)
                setExpenses(expenses.filter(e => e.title !== title));
        ;})
	};

	return (
		<Card>
			<NewExpense onAddExpense={addExpenseHandler} />
			<Expenses
				items={expenses}
				onClearList={clearListHandler}
				onDeleteItem={deleteItemHandler}
			/>
		</Card>
	);
};

export default App;
