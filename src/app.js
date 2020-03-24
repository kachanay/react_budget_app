import React from 'react';
import {Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import ReactDOM from 'react-dom';
import { startSetExpenses } from '../src/actions/expenses';
import { setTextFilter } from '../src/actions/filters';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();

ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById('root')
)

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>
  , document.getElementById('root'))
})
