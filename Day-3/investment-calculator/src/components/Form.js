import React, { useState } from 'react'
import './Form.css'
let initialInput = {
    'current-savings':1,
    "yearly-contribution":1,
    'expected-return':1,
    'duration':1


}
const Form = (props) => {

    let [userInput,setUserInput]= useState(initialInput);

    
    let submitHandler = (e)=>{
        e.preventDefault();
        props.onCalculate(userInput);
    }
    let restHandler = (e)=>{
        setUserInput(initialInput);
    }

    let inputChangeHandler = (idx, value)=>{
        setUserInput((prev)=>({
            ...prev,
            [idx]:value
        }))
    }

  return (
    <form onSubmit={submitHandler} className="form">
        <div className="input-group">
          <p>
            <label htmlFor="current-savings">Current Savings ($)</label>
            <input value={userInput['current-savings']} onChange={(e)=>inputChangeHandler('current-savings',e.target.value)} type="number" id="current-savings" />
          </p>
          <p>
            <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
            <input  value={userInput['yearly-contribution']} onChange={(e)=>inputChangeHandler('yearly-contribution',e.target.value)} type="number" id="yearly-contribution" />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label htmlFor="expected-return">
              Expected Interest (%, per year)
            </label>
            <input  value={userInput['expected-return']} onChange={(e)=>inputChangeHandler('expected-return',e.target.value)} type="number" id="expected-return" />
          </p>
          <p>
            <label htmlFor="duration">Investment Duration (years)</label>
            <input  value={userInput['duration']} onChange={(e)=>inputChangeHandler('duration',e.target.value)} type="number" id="duration" />
          </p>
        </div>
        <p className="actions">
          <button 
            type="reset" className="buttonAlt"
            onClick={restHandler}
          >
            Reset
          </button>
          <button type="submit" className="button">
            Calculate
          </button>
        </p>
      </form>
  )
}

export default Form