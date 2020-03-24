import {addExpense, startAddExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense } from '../../actions/expenses';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moment from 'moment';
import database from '../../firebase/firebase';

const mockStore = configureStore([thunk]);

const expenses = [
  {
    id: '1',
    description: 'Rent',
    note: 'Rent note',
    amount: 7000,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Groceries',
    note: 'Groceries note',
    amount: 3000,
    createdAt: moment(0).subtract(4, 'days').valueOf()
  },
  {
    id: '3',
    description: 'Snacks',
    note: 'Snacks note',
    amount: 3000,
    createdAt: moment(0).add(4, 'days').valueOf()
  },
  {
    id: '4',
    description: 'Vegetables and Fruits',
    note: '',
    amount: 2000,
    createdAt: moment(0).subtract(1, 'days').valueOf()
  }
];

// beforeEach((done) => {
//   const expensesData = {};
//   expenses.forEach(({id, description, note, amount, createdAt}) => {
//     expensesData[id] = {
//       description,
//       note,
//       amount,
//       createdAt
//     }
//   })
//   database.ref('expenses').set(expensesData).then(() => done());
// });

test('Should test remove expense', () => {
  const action = removeExpense({ id: '123456' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123456'
  })
});

test('should test edit expense', () => {
  const action = editExpense('123456', { description: 'Test expense', amount: 100 });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: '123456',
    expense: { description: 'Test expense', amount: 100 }
  })
});

test('should test add expense', () => {
  const newExpense = {
    id: '1',
    description: 'rent',
    amount: 7000,
    createdAt: 1000,
    note: 'This month rent expense'
  }
  const action = addExpense(newExpense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: newExpense
  })
});

test('Should add expense to database and store', () => {
  const expenseData = {
    description: 'Mouse',
    note: 'Mouse Expense',
    amount: 3000,
    createdAt: 1000
  }
  const store = mockStore({});
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense : {
        id: expect.any(String),
        ...expenseData
      }
    });
   // done();
  })
});

test('should fetch expenses from firebase', (done) => {
  const store = mockStore({});
  store.dispatch(startSetExpenses()).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'SET_EXPENSES',
      expenses
    })
    done();
  })
});

test('Should remove expense from firebase', (done) => {
  const store = mockStore({});
  store.dispatch(startRemoveExpense({id: '-M3BKU8gOch_hgb16FJH'})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'REMOVE_EXPENSE',
      id: '-M3BKU8gOch_hgb16FJH'
    })
  })
});

test('should setup set expense action object with data', () => {
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  })
});