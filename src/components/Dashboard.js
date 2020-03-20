import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

export const Dashboard = () => (
  <div>
    <ExpenseListFilters />
    <ExpenseList />
  </div>
);

export default Dashboard;