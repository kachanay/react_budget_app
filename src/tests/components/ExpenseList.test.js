import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
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

test('should render expense list with expenses', () => {
  const wrapper = shallow(<ExpenseList expenses={expenses}/>);
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense list with empty message', () => {
  const wrapper = shallow(<ExpenseList expenses={[]}/>);
  expect(wrapper).toMatchSnapshot();
});