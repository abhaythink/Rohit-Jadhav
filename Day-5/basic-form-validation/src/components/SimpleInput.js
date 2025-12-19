import { useState } from "react";

const SimpleInput = (props) => {

  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() != "";
  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value)
  }

  const submitHandler = event => {
    setEnteredNameTouched(true);
    event.preventDefault();
    if (!enteredNameIsValid) {
      return;
    }
    setEnteredName('');
    setEnteredNameTouched(false);
  }

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true)
  }

  const nameInputClasses = nameInputIsInvalid ? 'form-control invalid' : 'form-control ';

  return (
    <form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange={nameInputChangeHandler} value={enteredName} onBlur={nameInputBlurHandler} />

        {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
