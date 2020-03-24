import getExpensesTotal from '../../selectors/expenses-total';
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

test('should return 0 if no expenses', () => {
  let total = getExpensesTotal([]);
  expect(total).toBe('$0.00');
});

test('should correctly add up if single expense', () => {
  let total = getExpensesTotal([{
    id: '1',
    description: 'Rent',
    note: 'Rent note',
    amount: 7000,
    createdAt: 0
  }]);
  expect(total).toBe('$70.00');
});

test('should correctly add up if multiple expense', () => {
  let total = getExpensesTotal(expenses);
  expect(total).toBe('$150.00');
});