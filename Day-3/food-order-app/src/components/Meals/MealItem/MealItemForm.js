import React, { useRef, useState } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value; // Correctly access the value
    const enteredAmountNumber = +enteredAmount; // Convert to number

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5) {
      setAmountIsValid(false); // Validation failed
      return;
    }

    // Pass the valid amount to the parent component's handler
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          step: '1',
          max: '5',
          defaultValue: '1',
        }}
      />
      {!amountIsValid && <p className={classes.errorText}>Please enter a valid amount (1-5).</p>} {/* Error message */}
      <button>Add</button>
    </form>
  );
};

export default MealItemForm;




// import React, { useRef, useState } from 'react'
// import classes from './MealItemForm.module.css'
// import Input from '../../UI/Input'
// const MealItemForm = (props) => {
//   const [amountIsValid, setAmountIsValid] = useState(true);
//   const amountInputRef = useRef();
//   const submitHandler = event => {
//     event.preventDefault();
//       const enteredAmount = amountInputRef.value;
//       const enteredAmountNumber = +enteredAmount;

//       if(enteredAmount.trim().length ===0 || enteredAmountNumber <1){
//         setAmountIsValid(false);
//         return;
//       }

//       props.onAddToCart(enteredAmountNumber);
//   }


//   return (
//     <form className={classes.form} onSubmit={submitHandler}>
//        <Input 
//        ref={amountInputRef}
//        label="Amount" input={{
//         id:'amount',
//         type:'number',
//         min: '1',
//         step: '1',
//         max: '5',
//         defaultValue:'1'
//        }} />
//         <button>Add</button>
//     </form>
//   )
// }

// export default MealItemForm