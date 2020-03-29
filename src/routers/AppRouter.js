import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CreateExpense from '../components/CreateExpense';
import LoginComponent from '../components/LoginComponent';
import EditExpense from '../components/EditExpense';
import Dashboard from '../components/Dashboard';
import Error from '../components/Error';
import PrivateRoute from './PrivateRoute';
import PublicRoute from '../routers/PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PrivateRoute path="/create" component={CreateExpense} />
        <PrivateRoute path="/edit/:id" component={EditExpense} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PublicRoute path="/" component={LoginComponent} exact={true} />
        <Route component={Error} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
