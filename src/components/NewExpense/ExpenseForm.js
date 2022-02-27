import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");
    const [addExpenseOption, setAddExpenseOption] = useState(false);

    const resetInput = () => {
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        resetInput();
        props.onSaveExpenseData(expenseData);
    };

    const addExpense = () => {
        return (
            <form onSubmit={submitHandler} className="new-expense-form">
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Titel</label>
                        <input
                            placeholder="Navn på udgift"
                            required
                            type="text"
                            value={enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Beløb</label>
                        <input
                            placeholder="DKK"
                            required
                            type="number"
                            min="0.01"
                            step="0.01"
                            value={enteredAmount}
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Dato</label>
                        <input
                            required
                            type="date"
                            min="2019-01-01"
                            max="2023-12-31"
                            value={enteredDate}
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onMouseDown={addExpenseToggleHandler}>
                        Fortryd
                    </button>
                    <button type="submit">Tilføj Udgift</button>
                </div>
            </form>
        );
    };

    const defaultView = () => {
        return (
            <button
                className="default-button"
                type="submit"
                onClick={addExpenseToggleHandler}
            >
                Tilføj ny Udgift
            </button>
        );
    };

    const addExpenseToggleHandler = () => {
        resetInput();

        addExpenseOption === false
            ? setAddExpenseOption(true)
            : setAddExpenseOption(false);
    };

    return addExpenseOption === false ? defaultView() : addExpense();
};

export default ExpenseForm;
