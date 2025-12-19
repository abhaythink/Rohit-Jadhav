import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';
const Counter = () => {

  const dispatch = useDispatch()

  const show = useSelector(state=>state.counter.showCounter);
  const counter = useSelector(state=>state.counter.counter);

  const incrementHandler = () => {
  dispatch(counterActions.increment());

    // dispatch({
    //   type:'increment'
    // })
  };
  const increaseHandler = () => {
     dispatch(counterActions.increase(10));
    // dispatch({
    //   type:'increase',
    //   amount:5
    // })
  };
  const decrementHandler = () => {
     dispatch(counterActions.decrement());
    // dispatch({
    //   type:'decrement'
    // })
  };
  const toggleCounterHandler = () => {
     dispatch(counterActions.toggleCounter());
    // dispatch({
    //   type:'toggle'
    // })
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show&&<div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>increase</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
