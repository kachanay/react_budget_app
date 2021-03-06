import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter, { history } from './routers/AppRouter';
import ReactDOM from 'react-dom';
import { startSetExpenses } from '../src/actions/expenses';
import { login, logout } from '../src/actions/auth';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { firebase } from './firebase/firebase';

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>
      , document.getElementById('root'));
      hasRendered = true;
  }
}


ReactDOM.render(
  <p>Loading...</p>,
  document.getElementById('root')
)

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard')
      }
    })
  } else {
    store.dispatch(logout());
    renderApp();
    history.push('/');
  }
})
