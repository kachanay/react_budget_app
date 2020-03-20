import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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
    description: 'rent',
    amount: 7000,
    createdAt: 1000,
    note: 'This month rent expense'
  }
  const action = addExpense(newExpense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...newExpense,
      id: expect.any(String)
    }
  })
});

test('should test add expense action with defaults', () => {
  const defaultExpense = {
    description: '',
    note: '',
    amount: 0,
    createdAt: 0
  };
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...defaultExpense,
      id: expect.any(String)
    }
  })
});