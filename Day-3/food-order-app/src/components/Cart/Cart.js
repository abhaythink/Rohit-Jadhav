import React, { useContext, useState } from 'react';
import classes from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart_context';
import CartItem from './CartItem';
import Checkout from './Checkout';

const Cart = (props) => {
  const [checkout, setCheckout] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const cartCtx = useContext(CartContext);

  const totalAmount = `${(cartCtx.totalAmount || 0).toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const orderHandler = () => {
    setCheckout(true);
  };

  const submitOrderHandler = async (userData) => {
    if (!userData) return;

    setIsSubmitting(true);

    await fetch(
      'https://react-http-b3704-default-rtdb.firebaseio.com/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: cartCtx.items,
        }),
      }
    );

    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const modalContent = (
    <>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {checkout && (
        <Checkout
          onConfirm={submitOrderHandler}
          onClose={props.onClose}
        />
      )}
      {!checkout && (
        <div className={classes.actions}>
          <button
            className={classes['button-alt']}
            onClick={props.onClose}
          >
            Close
          </button>
          {hasItems && (
            <button onClick={orderHandler} className={classes.button}>
              Order
            </button>
          )}
        </div>
      )}
    </>
  );

  const isSubmittingContent = <p>Sending order...</p>;

  const didSubmitContent = <p>Successfully ordered! 🎉</p>;

  return (
    <Modal onClose={props.onClose}>
      {!isSubmitting && !didSubmit && modalContent}
      {isSubmitting && isSubmittingContent}
      {didSubmit && didSubmitContent}
    </Modal>
  );
};

export default Cart;
