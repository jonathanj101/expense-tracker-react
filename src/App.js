import React, { Component } from 'react'
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      rows: []
      // description: '',
      // amount: '',
      // date: '',
      // payment: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange = (e) => {
    let paymentTitle = document.getElementById('dropdownMenu2')
    paymentTitle.textContent = e.target.outerText
    console.log(e.target.textContent)
  }

  onSubmit = () => {
    const description = document.getElementById('description').value
    const amount = document.getElementById('amount').value
    const date = document.getElementById('date').value
    const payment = document.getElementById('dropdownMenu2').innerHTML

    if (
      description === null ||
      amount === null ||
      date === null ||
      payment === 'Payment Method'
    ) {
      alert("Empty Expense detail ==>> no Expense to track!!")
    } else {

      var nextState = this.state.rows
      nextState.push([description, amount, payment, date])
      this.setState({
        submitted: true,
        description: description,
        amount: amount,
        date: date,
        payment: payment

      })
    }
  }

  render() {
    return (
      <div className="App">
        <UserInput onSubmit={this.onSubmit} handleChange={this.handleChange} state={this.state} />
        <ExpensesTable state={this.state} />
      </div>
    );
  }
}

export default App;

