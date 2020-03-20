import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Dashboard from '../components/Dashboard';
import Help from '../components/Help';
import Error from '../components/Error';
import Header from '../components/Header';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/create" component={CreateExpense} />
        <Route path="/edit/:id" component={EditExpense} />
        <Route path="/help" component={Help} />
        <Route path="/" component={Dashboard} exact={true} />
        <Route component={Error} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
