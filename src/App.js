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
        console.log(`hello from app`)
        setExpenses([]);
    }

    return (
        <Card>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} onClearList={clearListHandler}/>
        </Card>
    );
};

export default App;
