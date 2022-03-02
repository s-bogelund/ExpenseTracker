import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
    if (props.items.length === 0) {
        return <h2 className="expenses-list__fallback">Ingen udgifter fundet</h2>;
    }

    const deleteHandler = (title, amount) => {
		console.log(`${title, amount} <------- id`);
            props.onDeleteItem(title, amount);
    }
    return (
        <ul className="expenses-list">
            {props.items.map((expense) => (
                <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}
                    onDelete={deleteHandler}
                />
            ))}
            
        </ul>
    );
};

export default ExpensesList;
