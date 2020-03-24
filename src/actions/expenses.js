import uuid from 'uuid';
import database from '../firebase/firebase';

export const addExpense = (expense) => ({
  type: 'ADD_EXPENSE',
  expense
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const { description = '', note = '', amount = 0, createdAt = 0 } = expenseData;
    const expense = { description, note, amount, createdAt };
    console.log(expense);
    return database.ref('expenses').push(expense).then((ref) => {
      console.log(ref);
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

export const removeExpense = (id) => ({
  type: 'REMOVE_EXPENSE',
  id
})

export const editExpense = (id, expense) => ({
  type: 'EDIT_EXPENSE',
  id,
  expense
})

export const startEditExpense = (id = '', expense) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).update(expense).then(() => {
      dispatch(editExpense(id, expense));
    })
  }
}

export const setExpenses = (expenses) => ({
  type: 'SET_EXPENSES',
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    const expenses = [];
    return database.ref('expenses').once('value').then((data) => {
      data.forEach((expense) => {
        expenses.push({
          id: expense.key,
          ...expense.val()
        })
      });
      dispatch(setExpenses(expenses));
    })
  }
}

export const startRemoveExpense = ({ id = '' } = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense(id));
    })
  }
}