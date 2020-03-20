import { createStore } from 'redux';

const initialState = {
  count: 0
}

const store = createStore((state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

console.log(store.getState());

store.dispatch({
  type: 'INCREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'RESET'
});

console.log(store.getState());

store.dispatch({
  type: 'DECREMENT'
});

console.log(store.getState());

store.dispatch({
  type: 'DECREMENT',
  decrementBy : 5
});

console.log(store.getState());