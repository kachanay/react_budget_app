import React from 'react';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';
import { connect } from 'react-redux';

export const Header = (Props) => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active">Go Home</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
    <button onClick={Props.logout}>Logout</button>
  </header>
);

const mapDispatchToProps = (dispatch) => {
  return {
    logout() {
      dispatch(startLogout())
    }
  }
}

export default connect(undefined, mapDispatchToProps)(Header);