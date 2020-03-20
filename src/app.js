import React from 'react';
import {Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import ReactDOM from 'react-dom';
import { addExpense } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>
, document.getElementById('root'))