store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  const expenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(expenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 2000, createdAt: -21000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Groceries', amount: 7000, createdAt: -1000 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }))

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 5000 }))

// store.dispatch(setTextFilter('rent'))

// store.dispatch(setTextFilter(''))

 store.dispatch(sortByAmount())
// store.dispatch(sortByDate())

// store.dispatch(setStartDate(125))
// store.dispatch(setStartDate())
// store.dispatch(setEndDate(150))

