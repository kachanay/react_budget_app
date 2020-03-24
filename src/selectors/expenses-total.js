import numeral from 'numeral';

const getExpensesTotal = (expenses) => {
  let total = 0;
  expenses.forEach((expense) => {
    total += expense.amount;
  })
  return numeral(total/100).format('$0,0.00');
}

export default getExpensesTotal;