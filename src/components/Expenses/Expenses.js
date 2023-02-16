import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css'

const Expenses = (props) => {
  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      LocationOfExpenditure: 'Mumbai',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: 'e2', title: 'New TV', LocationOfExpenditure: 'Delhi', amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: 'e3',
      title: 'Car Insurance',
      LocationOfExpenditure: 'Bangalore',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      LocationOfExpenditure: 'Hyderabad',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  return (
    <div className="expense-container">
      <Card className='expenses'>
        {props.items.map((expense) => {
          return <ExpenseItem key={expense.id} title={expense.title} LocationOfExpenditure={expense.LocationOfExpenditure} amount={expense.amount} date={expense.date}></ExpenseItem>
        })}
      </Card>
    </div>
  )
};

export default Expenses;
