// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachHistory, onDelete} = props
  const {id, titleName, amountBalance, typeMode} = eachHistory

  const onDeleteList = () => {
    onDelete(id, typeMode, amountBalance)
  }
  return (
    <li className="title-history-container">
      <p className="lists-history"> {titleName} </p>
      <p className="lists-history">Rs {amountBalance}</p>
      <p className="lists-history"> {typeMode} </p>
      <button
        type="button"
        testid="delete"
        className="delete-button"
        onClick={onDeleteList}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}
export default TransactionItem
