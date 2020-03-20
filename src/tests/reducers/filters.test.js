import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Should set up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state).toEqual({
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, { type: 'SORT_BY_DATE' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should update text filter to passed text', () => {
  const currentState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, { type: 'UPDATE_TEXT_FILTER', text: 'bill' });
  expect(state).toEqual({
    text: 'bill',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});

test('should set start date', () => {
  const currentState = {
    text: 'bill',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, { type: 'SET_START_DATE', startDate: moment(0) });
  expect(state).toEqual({
    text: 'bill',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment().endOf('month')
  })
});

test('should set end date', () => {
  const currentState = {
    text: 'bill',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment().endOf('month')
  };
  const state = filtersReducer(currentState, { type: 'SET_END_DATE', endDate: moment(0) });
  expect(state).toEqual({
    text: 'bill',
    sortBy: 'date',
    startDate: moment(0),
    endDate: moment(0)
  })
});