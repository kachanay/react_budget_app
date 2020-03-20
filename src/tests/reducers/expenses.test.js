import expensesReducer from '../../reducers/expenses';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([{
    id: '1',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }])
});

test('Should add new expense', () => {
  const newExpense = {
    id: expect.any(String),
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  }
  const state = expensesReducer(undefined, { type: 'ADD_EXPENSE', expense: newExpense });

  expect(state).toContainEqual({
    id: expect.any(String),
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  })
});

test('Should edit an existing expense', () => {
  const currentState = [{
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  }];
  const updatedExpense = {
    amount: 3000
  };
  const state = expensesReducer(currentState, { type: 'EDIT_EXPENSE', id: '1', expense: updatedExpense });

  expect(state).toContainEqual({
    id: '1',
    description: 'test expense',
    amount: 3000,
    createdAt: 0,
    note: 'test note'
  })
});

test('Should not edit an expense if id not found', () => {
  const currentState = [{
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  }];
  const updatedExpense = {
    amount: 3000
  };
  const state = expensesReducer(currentState, { type: 'EDIT_EXPENSE', id: '2', expense: updatedExpense });

  expect(state).toContainEqual({
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  })
});

test('Should remove an expense', () => {
  const currentState = [{
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  },
  {
    id: '2',
    description: 'Rent',
    amount: 7000,
    createdAt: 0,
    note: 'Rent note'
  }
  ];
  const state = expensesReducer(currentState, { type: 'REMOVE_EXPENSE', id: '1' });
  expect(state.length).toBe(1);
  expect(state).toEqual([{
    id: '2',
    description: 'Rent',
    amount: 7000,
    createdAt: 0,
    note: 'Rent note'
  }]);
  expect(state).not.toContainEqual({
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  })
});

test('Should not remove an expense with id not found', () => {
  const currentState = [{
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  },
  {
    id: '2',
    description: 'Rent',
    amount: 7000,
    createdAt: 0,
    note: 'Rent note'
  }
  ];
  const state = expensesReducer(currentState, { type: 'REMOVE_EXPENSE', id: '3' });
  expect(state.length).toBe(2);
  expect(state).toEqual([{
    id: '1',
    description: 'test expense',
    amount: 1000,
    createdAt: 0,
    note: 'test note'
  },
  {
    id: '2',
    description: 'Rent',
    amount: 7000,
    createdAt: 0,
    note: 'Rent note'
  }]);
});

