import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
    const clickHandler = (e) => {
        const elements = document.getElementsByClassName('expenseItem-container')
        if (elements.length > 0) {
            e.target.closest('.expenseItem-container').remove();
        }
    }
    return (
        <div className='expenseItem-container'>
            <div className='expense-item'>
                <div className='datedetailcontainer'>
                    <ExpenseDate date={props.date} />
                    <ExpenseDetails title={props.title}
                        LocationOfExpenditure={props.LocationOfExpenditure}
                        amount={props.amount} />
                    <button onClick={clickHandler}>Change Title</button>
                </div>
            </div >
        </div>
    )
}

export default ExpenseItem;
