import { createStore } from 'redux';
const redux = require('redux');
const intionalStage = { counter: 0 ,showCounter = true};
const counterReducer = (state = intionalStage , action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter:state.showCounter
    };
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.demoNumber,
      showCounter:state.showCounter
    };
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter:state.showCounter
    };
  }
  if(action.type === 'toggle'){
    return {
      showCounter:!state.showCounter,
      counter:state.counter
    };
  }
  return state;
};
const store = redux.createStore(counterReducer);
//subscribe
export default store;
