import React from 'react';
import { shallow } from 'enzyme';
import { EditExpense } from '../../components/EditExpense';

let editExpense, removeExpense, history, wrapper, expense;

beforeEach(() => {
  expense = {
    id: '1',
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  };
  editExpense = jest.fn();
  removeExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<EditExpense expense={expense} editExpense={editExpense} removeExpense={removeExpense} history={history} />);
});

test('Should render edit expense component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should handle onSubmit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')({
    id: '1',
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  });
  expect(history.push).toHaveBeenCalledWith('/');
  expect(editExpense).toHaveBeenCalledWith('1', {
    id: '1',
    description: 'test description',
    note: 'test note',
    amount: 1000,
    createdAt: 0
  });
});

test('should handle remove Expense', () => {
  wrapper.find('ExpenseForm').prop('removeExpense')();
  expect(history.push).toHaveBeenCalledWith('/');
  expect(removeExpense).toHaveBeenCalled();
});