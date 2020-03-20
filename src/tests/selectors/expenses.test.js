import getVisibleExpenses from '../../selectors/expenses';
import moment from 'moment';

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
]

test('Should filter by text value', () => {
  const filteredExpenses = getVisibleExpenses(expenses, { text: 'rent' });
  expect(filteredExpenses.length).toBe(1);
  expect(filteredExpenses).toEqual([
    {
      id: '1',
      description: 'Rent',
      note: 'Rent note',
      amount: 7000,
      createdAt: 0
    }
  ])
});

test('Should filter by start Date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses.length).toBe(2);
  expect(filteredExpenses).toEqual([
    {
      id: '3',
      description: 'Snacks',
      note: 'Snacks note',
      amount: 3000,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
      id: '1',
      description: 'Rent',
      note: 'Rent note',
      amount: 7000,
      createdAt: 0
    }
  ])
});

test('Should filter by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(5, 'days')
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([
    {
      id: '3',
      description: 'Snacks',
      note: 'Snacks note',
      amount: 3000,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
      id: '1',
      description: 'Rent',
      note: 'Rent note',
      amount: 7000,
      createdAt: 0
    },
    {
      id: '4',
      description: 'Vegetables and Fruits',
      note: '',
      amount: 2000,
      createdAt: moment(0).subtract(1, 'days').valueOf()
    },
    {
      id: '2',
      description: 'Groceries',
      note: 'Groceries note',
      amount: 3000,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    }
  ])
});

test('Should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([
    {
      id: '3',
      description: 'Snacks',
      note: 'Snacks note',
      amount: 3000,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
      id: '1',
      description: 'Rent',
      note: 'Rent note',
      amount: 7000,
      createdAt: 0
    },
    {
      id: '4',
      description: 'Vegetables and Fruits',
      note: '',
      amount: 2000,
      createdAt: moment(0).subtract(1, 'days').valueOf()
    },
    {
      id: '2',
      description: 'Groceries',
      note: 'Groceries note',
      amount: 3000,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    }
  ])
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const filteredExpenses = getVisibleExpenses(expenses, filters);
  expect(filteredExpenses).toEqual([
    {
      id: '1',
      description: 'Rent',
      note: 'Rent note',
      amount: 7000,
      createdAt: 0
    },
    {
      id: '3',
      description: 'Snacks',
      note: 'Snacks note',
      amount: 3000,
      createdAt: moment(0).add(4, 'days').valueOf()
    },
    {
      id: '2',
      description: 'Groceries',
      note: 'Groceries note',
      amount: 3000,
      createdAt: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: '4',
      description: 'Vegetables and Fruits',
      note: '',
      amount: 2000,
      createdAt: moment(0).subtract(1, 'days').valueOf()
    }
  ])
});