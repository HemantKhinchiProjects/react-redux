import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';
// const counterReducer = (state = intionalStage, action) => {
//   if (action.type === 'increment') {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'increase') {
//     return {
//       counter: state.counter + action.demoNumber,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'decrement') {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }
//   if (action.type === 'toggle') {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }
//   return state;
// };

const store = configureStore({
  //reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});



//subscribe
export default store;
