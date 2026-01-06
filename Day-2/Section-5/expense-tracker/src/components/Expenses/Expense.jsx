import React, { useState } from 'react'
import './Expense.css'
import ExpenseFilter from './ExpenseFilter';
import Card from '../Util/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
const Expense = (props) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  const filteredExpenses = props.items.filter((e)=>{
    return e.date.getFullYear().toString()===filteredYear;
  });
  return (
    <>
    <div>
      <div className='expenses'>
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
       <ExpensesChart expenses={filteredExpenses}/>\
       <ExpensesList items={filteredExpenses} />
      </div>
      </div>
    </>
  )


}

export default Expense