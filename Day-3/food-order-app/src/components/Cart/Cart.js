import React from 'react'
import classes from './Cart.module.css'

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}> {[{id:'1',name:'sushi',amount:2,price:1299}].map(item=><li></li>)}</ul>
  return (
    <>
        <div>
            {cartItems}
            <div><span>Total Amount</span>
            <span>35.6</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button-alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    </>
  )
}

export default Cart