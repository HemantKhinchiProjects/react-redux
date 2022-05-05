import classes from './Counter.module.css';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const show = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };
  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };
  const increaseHandler = () => {
    dispatch({ type: 'increase', demoNumber: 5 });
  };
  const dicrementHandler = () => {
    dispatch({ type: 'decrement' });
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {show && <div className={classes.value}>-/ {counter} /-</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={dicrementHandler}>Dicrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
