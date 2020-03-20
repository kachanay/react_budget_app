import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import moment from '../__mocks__/moment';

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

test('should render expense form correctly', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test('should set description on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(0).simulate('change', {
    target: { value: 'Test value' }
  })
  expect(wrapper.state('description')).toBe('Test value');
});

test('Should set note on text area change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('textarea').simulate('change', {
    target: { value: 'test note'}
  });
  expect(wrapper.state('note')).toBe('test note');
  expect(wrapper).toMatchSnapshot();
});

test('should set amount on valid input value', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: '12.22'}
  })
  expect(wrapper.state('amount')).toBe('12.22');
  expect(wrapper).toMatchSnapshot();
});

test('should not set amount on invalid input value', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('input').at(1).simulate('change', {
    target: { value: '12.22456'}
  })
  expect(wrapper.state('amount')).toBe('');
  expect(wrapper).toMatchSnapshot();
});

test('should call onSubmit prop with valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    note: expenses[1].note,
    amount: expenses[1].amount,
    createdAt: expenses[1].createdAt
  });
  expect(wrapper).toMatchSnapshot();
});

test('should set new date on date change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(moment());
  expect(wrapper.state('createdAt')).toEqual(moment());
});

test('should set calendarFocused on change', () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true});
  expect(wrapper.state('calendarFocused')).toBe(true);
});