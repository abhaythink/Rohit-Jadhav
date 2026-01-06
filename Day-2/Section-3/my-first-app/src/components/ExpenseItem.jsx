import React from "react"
import './ExpenseItem.css'
import ExpenseDate from "./ExpenseDate";
function ExpenseItem({amount,title,date}){
    
    return(
       
        <div className="expense-item">
           <ExpenseDate date={date}/>
            <div>
                <h2>{title}</h2>
                <div className="expense-item__description">{`\$${amount}`}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;