import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListItem } from '../../components/ExpenseListItem';
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
];

test('should render expense list item with passed expense data', () => {
  const wrapper = shallow(<ExpenseListItem expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});