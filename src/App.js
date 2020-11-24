import React, { Component } from 'react'
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      rows: [],
      payment: '',
      amount: '',
      date: '',
      description: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.deleteExpense = this.deleteExpense.bind(this)
  }

  componentDidMount() {
    const item = JSON.parse(localStorage.getItem('Expense'))
    item ? this.setState({ rows: item }) : this.setState({ rows: [] })
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.rows.length !== prevState.rows.length) {
      localStorage.setItem('Expense', JSON.stringify(this.state.rows))
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const newExpenseItem = {
      id: Math.random(),
      description: this.state.description,
      amount: this.state.amount,
      date: this.state.date,
      payment: this.state.payment
    }

    this.setState({
      rows: [...this.state.rows, newExpenseItem]
    })
  }

  deleteExpense = (expenseId) => {
    let newExpenses = this.state.rows.filter(
      (expense) => expense.id !== expenseId
    )
    this.setState({
      rows: newExpenses
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput onSubmit={this.onSubmit} handleChange={this.handleChange} state={this.state.rows} />
        <ExpensesTable deleteExpense={this.deleteExpense} expenses={this.state.rows} />
      </div>
    );
  }
}

export default App;

