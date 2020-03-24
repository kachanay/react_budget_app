import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';

let startAddExpense, history, wrapper;

beforeEach(() => {
  startAddExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreateExpense startAddExpense={startAddExpense} history={history} />);
});

test('should render create expense component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')({
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  });
  expect(history.push).toHaveBeenCalledWith('/');
  expect(startAddExpense).toHaveBeenLastCalledWith({
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  })
});