import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const altFilters = {
  text: 'bill',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(3, 'days')
};

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    sortByDate={sortByDate}
    sortByAmount={sortByAmount}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
  />)
});

test('Should render expense list filters component correctly', () => {
  expect(wrapper).toMatchSnapshot();
});

test('Should render expense list filters component with alternate filters data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  })
  expect(wrapper).toMatchSnapshot();
});

test('Should handle text change', () => {
  wrapper.find('input').simulate('change', {
    target: { value: 'test' }
  });
  expect(setTextFilter).toHaveBeenCalledWith('test');
});

test('Should handle sort by date', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'date' }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('Should handle sort by Amount', () => {
  wrapper.find('select').simulate('change', {
    target: { value: 'amount' }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('Should handle dates change', () => {
  wrapper.find('DateRangePicker').prop('onDatesChange')({
    startDate: moment(0),
    endDate: moment(0).add(3, 'days')
  });
  expect(setStartDate).toHaveBeenCalledWith(moment(0));
  expect(setEndDate).toHaveBeenCalledWith(moment(0).add(3, 'days'));
});

test('Should handle date focused change', () => {
  wrapper.find('DateRangePicker').prop('onFocusChange')('endDate');
  expect(wrapper.state('calendarFocused')).toBe('endDate');
});