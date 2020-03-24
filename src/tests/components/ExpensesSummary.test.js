import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

let wrapper;

beforeEach(() => {
  wrapper = shallow(<ExpensesSummary expensesCount={1} expensesTotal={1000} />);
});

test('should correctly render expenses summary with 1 expense', () => {
  expect(wrapper).toMatchSnapshot();
});

test('should correctly render expenses summary with expenses', () => {
  wrapper.setProps({ expensesCount: 5 });
  expect(wrapper).toMatchSnapshot();
});