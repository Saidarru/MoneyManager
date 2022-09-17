import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].optionId,
    transactionList: [],
    totalIncome: 0,
    totalExpenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    const value = transactionTypeOptions.filter(
      eachType => eachType.optionId === event.target.value,
    )

    this.setState({type: value[0].optionId})
  }

  onAddHistory = event => {
    event.preventDefault()
    const {title, amount, type} = this.state

    const typeValue = transactionTypeOptions.filter(
      each => each.optionId === type,
    )

    const newObj = {
      id: uuidv4(),
      titleName: title,
      amountBalance: amount,
      typeMode: typeValue[0].displayText,
    }

    const income =
      type === transactionTypeOptions[0].optionId ? parseInt(amount) : 0
    const expenses =
      type === transactionTypeOptions[1].optionId ? parseInt(amount) : 0

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newObj],
      totalIncome: prevState.totalIncome + income,
      totalExpenses: prevState.totalExpenses + expenses,
      title: '',
      amount: '',
      type: transactionTypeOptions[0].optionId,
    }))
  }

  onDelete = (id, typeMode, amountBalance) => {
    const Income =
      typeMode === transactionTypeOptions[0].displayText
        ? parseInt(amountBalance)
        : 0
    const Expense =
      typeMode === transactionTypeOptions[1].displayText
        ? parseInt(amountBalance)
        : 0

    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(each => each.id !== id),
      totalIncome: prevState.totalIncome - Income,
      totalExpenses: prevState.totalExpenses - Expense,
    }))
  }

  render() {
    const {
      title,
      amount,
      type,
      transactionList,
      totalIncome,
      totalExpenses,
    } = this.state

    return (
      <div className="bg-container">
        <div className="header-container">
          <h1 className="name-heading">Hi, Richard</h1>
          <p className="description">
            Welcome back to your <span className="span">Money Manager</span>
          </p>
        </div>

        <MoneyDetails totalIncome={totalIncome} totalExpenses={totalExpenses} />

        <div className="input-history-container">
          <form className="input-container" onSubmit={this.onAddHistory}>
            <h1 className="transaction">Add Transaction</h1>
            <label className="label" htmlFor="title">
              TITLE
            </label>
            <input
              type="text"
              id="title"
              className="input"
              placeholder="Title"
              onChange={this.onChangeTitle}
              value={title}
            />

            <label className="label" htmlFor="amount">
              AMOUNT
            </label>
            <input
              type="text"
              id="amount"
              className="input"
              placeholder="Amount"
              onChange={this.onChangeAmount}
              value={amount}
            />
            <label className="label" htmlFor="select">
              TYPE
            </label>
            <select value={type} className="input" onChange={this.onChangeType}>
              {transactionTypeOptions.map(eachType => (
                <option value={eachType.optionId}>
                  {eachType.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="his-container">
            <h1 className="transaction"> History </h1>
            <div>
              <ul className="history-container">
                <li className="title-history-container">
                  <p className="title">Title</p>
                  <p className="title">Amount</p>
                  <p className="title">Type</p>
                </li>
                {transactionList.map(eachHistory => (
                  <TransactionItem
                    key={eachHistory.id}
                    eachHistory={eachHistory}
                    onDelete={this.onDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
