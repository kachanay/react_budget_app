const expensesReducerDefaultState = [{
  id: '1',
  description: 'January Rent',
  note: 'This was the final payment for that address',
  amount: 54500,
  createdAt: 0
}];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense]
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => expense.id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.expense
          };
        } else {
          return expense;
        }
      })
    default:
      return state;
  }
};

export default expensesReducer;