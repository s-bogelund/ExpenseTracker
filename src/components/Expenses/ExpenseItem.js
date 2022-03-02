import React from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
    const deleteItemHandler = event => {
		console.log(`ExpenseItem`);
        props.onDelete(props.title, props.amount);
    }

    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.date} />
                <div className="expense-item__description">
                    <h2>{props.title}</h2>
                    <button className="delete-button" onClick={deleteItemHandler}>X</button>
                    <div className="expense-item__price">{props.amount} kr</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;
