import React, { useContext, useEffect, useState } from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import CartContext from '../../store/cart_context'

const HeaderCartButton = (props) => {
    const cartCtx = useContext(CartContext);
    const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);
    const numberOfCartItem = cartCtx.items.reduce((acc,curr)=>{
            return acc+curr.amount;
    },0)

    const btnClasses = `${classes.button} ${btnIsHighLighted ? classes.bump:''}`

    useEffect(()=>{
        if(cartCtx.items.length===0){
            return;
        }
        setBtnIsHighLighted(true);
    },[cartCtx.items])

    return (
        <>
            <button  className={btnClasses} onClick={props.onClick}>
                <span className={classes.icon}>
                    <CartIcon/>
                </span>
                <span>Your cart</span>
                <span  className={classes.badge}>{numberOfCartItem}</span>
            </button>
        </>
    )
}

export default HeaderCartButton