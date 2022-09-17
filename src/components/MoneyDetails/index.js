// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses} = props

  return (
    <div className="list-container">
      <div className="item-container con-1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img"
        />
        <div className="cash-container">
          <p className="balance">Your Balance</p>
          <p className="money" testid="balanceAmount">
            RS {totalIncome - totalExpenses}
          </p>
        </div>
      </div>
      <div className="item-container con-2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img"
        />
        <div className="cash-container">
          <p className="balance">Your Income</p>
          <p className="money" testid="incomeAmount">
            RS {totalIncome}
          </p>
        </div>
      </div>
      <div className="item-container con-3">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img"
        />
        <div className="cash-container">
          <p className="balance">Your Expenses</p>
          <p className="money" testid="expensesAmount">
            RS {totalExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
