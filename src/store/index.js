import { createStore } from 'redux';
const redux = require('redux');
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === 'increaseby5') {
    return {
      counter: state.counter + 5,
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
//subscribe
export default store;
