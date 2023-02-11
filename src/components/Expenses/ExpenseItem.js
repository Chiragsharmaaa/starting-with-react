import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';
import React, { useState } from 'react';

const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title);
    const [amount, setAmount] = useState(props.amount);

    const clickTitleHandler = () => {
        setTitle('updated!')
        console.log(title)
    }
    const clickAmountHandler = () => {
        setAmount('100$')
        console.log(amount)
    }
    return (
        <div className='expenseItem-container'>
            <div className='expense-item'>
                <div className='datedetailcontainer'>
                    <ExpenseDate date={props.date} />
                    <ExpenseDetails title={title}
                        LocationOfExpenditure={props.LocationOfExpenditure}
                        amount={amount} />
                    <button onClick={clickTitleHandler}>Change Title</button>
                    <button onClick={clickAmountHandler}>Change Amount</button>
                </div>
            </div >
        </div>
    )
}

export default ExpenseItem;