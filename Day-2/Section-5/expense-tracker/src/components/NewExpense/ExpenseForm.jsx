import React, { useState } from 'react'
import './ExpenseForm.css'
const ExpenseForm = (props) => {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');


    let titleChangeHandler = (e) => {
        setTitle(e.target.value);

    }
    let amountChangeHandler = (e) => {
        setAmount(e.target.value);
    }
    let dateChangeHandler = (e) => {
        setDate(e.target.value);
    }

    let submitHandler = (e) => {
        e.preventDefault();
        const expenseData = {
            title,
            amount,
            date: new Date(date),
        } 
        // console.log(expenseData);
        props.onSaveExpenseData(expenseData)
        setTitle('');
        setAmount('');
        setDate('');
        
    }

    // let inputHandler = (idn, value) => {
    //     if (idn === 'title') {
    //         setTitle(value);
    //     } else if (idn === 'amount') {
    //         setAmount(value);
    //     }else{
    //         setDate(value)
    //     }
    // }

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input value={title} onChange={titleChangeHandler} type="text" />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input value={amount} onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input value={date} onChange={dateChangeHandler} type="date" />
                </div>
                <div className="new-expense__actions">
                    <button type='submit'>Add Expends</button>
                </div>
            </div>
        </form>

    )
}

export default ExpenseForm