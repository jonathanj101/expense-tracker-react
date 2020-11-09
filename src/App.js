import React, { Component } from 'react'
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      rows: [],
      close: ''
      // description: "",
      // amount: "",
      // date: "",
      // payment: ""
    }


    // this.descriptionInput = React.createRef()
    // this.amountInput = React.createRef()
    // this.dateInput = React.createRef()
    // this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit = (description, amountPaid, datePurchased, paymentMethod) => {
    var nextState = this.state.rows
    nextState.push(description, amountPaid, datePurchased, paymentMethod)
    this.setState({
      submitted: true,
      rows: nextState,
      close: '&times'
    })

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

