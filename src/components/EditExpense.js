import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startRemoveExpense, startEditExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onRemoveExpense = () => {
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  }
  onSubmit = (expense) => {
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm
          expense={this.props.expense}
          removeExpense={this.onRemoveExpense}
          onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeExpense({ id }) {
      dispatch(startRemoveExpense({ id }))
    },
    editExpense(id, expense) {
      dispatch(startEditExpense(id, expense))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);