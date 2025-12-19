import React, { useRef, useState } from 'react'
import classes from './Checkout.module.css'

const iSEmpty = value => value.trim() === "";
const isFiveChars = value => value.trim().length != 5;


const Checkout = (props) => {

    const [formInputValidity, setFormInputValidity] = useState({
        name: true,
        add: true,
        city: true,
        postal: true
    })

    const nameInputRef = useRef();
    const addInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAdd = addInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !iSEmpty(enteredName);
        const enteredAddIsValid = !iSEmpty(enteredAdd);
        const enteredCityIsValid = !iSEmpty(enteredCity);
        const enteredPostalIsValid = !isFiveChars(enteredPostal);

        setFormInputValidity({
            name: enteredNameIsValid,
            add: enteredAddIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid
        })

        const formIsValid =
            enteredNameIsValid &&
            enteredAddIsValid &&
            enteredCityIsValid &&
            enteredPostalIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            add: enteredAdd,
            city: enteredCity,
            postal: enteredPostal
        })
    }

    return (
        <form onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name:</label>
                <input type='text' id='name' ref={nameInputRef} />
                {!formInputValidity.name && <p>please enter a valid name</p>}
            </div>

            <div className={classes.control}>
                <label htmlFor='add'>Address:</label>
                <input type='text' id='add' ref={addInputRef} />
                 {!formInputValidity.add && <p>please enter a valid add</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='pincode'>Postal code:</label>
                <input type='text' id='pincode' ref={postalInputRef} />
                 {!formInputValidity.postal && <p>please enter a valid postal</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City:</label>
                <input type='text' id='city' ref={cityInputRef} />
                 {!formInputValidity.city && <p>please enter a valid city</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>

        </form>

    )
}

export default Checkout