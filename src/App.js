import React, { Component } from 'react'
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      rows: [],
      id: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteExpense = this.deleteExpense.bind(this)
    this.saveToLocalStorage = this.saveToLocalStorage.bind(this)
    this.getExpenseFromLocalStorage = this.getExpenseFromLocalStorage.bind(this)

  }

  componentDidMount() {
    this.getExpenseFromLocalStorage()
  }

  handleChange = (e) => {
    let paymentTitle = document.getElementById('dropdownMenu2')
    paymentTitle.textContent = e.target.outerText
    console.log(this.state.id)
  }

  onSubmit = () => {
    const description = document.getElementById('description').value
    const amount = document.getElementById('amount').value
    const date = document.getElementById('date').value
    const payment = document.getElementById('dropdownMenu2').innerHTML

    if (
      description === null ||
      amount === null ||
      date === null
    ) {
      alert("Empty Expense detail ==>> no Expense to track!!")
    } else {

      var nextState = this.state.rows
      nextState.push({ id: Math.random(), description, amount, payment, date })
      this.setState({
        id: Math.random(),
        description: description,
        amount: amount,
        date: date,
        payment: payment
      })
      this.saveToLocalStorage(this.state.rows)
    }
  }

  deleteExpense = (e) => {
    e.target.parentElement.remove()

  }

  saveToLocalStorage = (expense) => {
    localStorage.setItem("Expense", JSON.stringify(expense))
  }

  getExpenseFromLocalStorage = () => {
    let item = JSON.parse(localStorage.getItem('Expense'))
    item ? this.setState({ rows: item }) : this.setState({ rows: [] })
  }

  render() {
    return (
      <div className="App">
        <UserInput onSubmit={this.onSubmit} handleChange={this.handleChange} state={this.state} />
        <ExpensesTable deleteExpense={this.deleteExpense} state={this.state} />
      </div>
    );
  }
}

export default App;

