import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

const now = moment();
console.log(now.format('MMM Do YYYY'));

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false
    }
  }

  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => {
        return {
          createdAt
        };
      })
    }
  }
  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => {
      return {
        description
      }
    })
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => {
      return {
        calendarFocused: focused
      }
    })
  }
  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => {
      return {
        note
      }
    })
  }
  onAmountChange = (event) => {
    const amount = event.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => {
        return {
          amount
        }
      })
    }
  }
  onSubmit = (event) => {
    event.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState({ error: 'Please provide valid description and amount' })
    } else {
      this.setState({ error: '' });
      this.props.onSubmit({ description: this.state.description, note: this.state.note, amount: parseFloat(this.state.amount, 10) * 100, createdAt: this.state.createdAt.valueOf() })
    }
  }
  render() {
    return (
      <div>
        {
          this.state.error && <p>{this.state.error}</p>
        }
        <form onSubmit={this.onSubmit}>
          <input onChange={this.onDescriptionChange} type="text" placeholder="Description" value={this.state.description} autoFocus />
          <input type="text" value={this.state.amount} onChange={this.onAmountChange} placeholder="amount" />
          <SingleDatePicker
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea value={this.state.note} onChange={this.onNoteChange} placeholder="Add a note for your expense (optional)"></textarea>
          <button>Add Expense</button>
        </form>
        <button onClick={this.props.removeExpense}>Remove</button>
      </div>
    )
  }
}