import React, { useState } from "react";
import { myData } from "./data/dummyData";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
    const [expenses, setExpenses] = useState(myData);

    const addExpenseHandler = (expense) => {
        setExpenses((prevExpenses) => {
            return [expense, ...prevExpenses];
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses items={expenses} />
        </div>
    );
};

export default App;
