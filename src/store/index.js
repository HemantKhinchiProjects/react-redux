import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
const initionalAuthState = {
  isAuthenticated = false
};
createSlice({
  name:'authentication',
  initialState:initionalAuthState,
  reducers:{
    login(state){},
    logout(state){}
  }
})
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
  reducer: counterSlice.reducer,
});
export const counterActions = counterSlice.actions;
//subscribe
export default store;
