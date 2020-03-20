import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<CreateExpense addExpense={addExpense} history={history} />);
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
  expect(addExpense).toHaveBeenLastCalledWith({
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  })
});