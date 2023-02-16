import React from "react";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";
import './App.css';

const App = () => {
  return (
    <div className="app-comp-class">
      <NewExpense />
      <Expenses />
    </div>
  )
};

export default App;
