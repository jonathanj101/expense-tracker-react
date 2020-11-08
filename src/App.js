import React, { Component } from 'react'
import ExpensesTable from './Components/ExpensesTable'
import UserInput from './Components/UserInput'
import './App.css'

class App extends Component {
  constructor() {
    super();

    this.state = {
      submitted: false,
      paymentMethodTitle: 'Payment Method',
      description: "",
      amount: "",
      date: "",
      payment: ""
    }
    this.descriptionInput = React.createRef()
    this.amountInput = React.createRef()
    this.dateInput = React.createRef()
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  handleChange = (event) => {
    console.log('selected');
    this.setState({
      paymentMethodTitle: event.target.value
    })
    console.log(this.state.paymentMethodTitle)

  }

  onSubmit = () => {
    const desc = this.descriptionInput.current.value
    const amount = this.amountInput.current.value
    const date = this.dateInput.current.value
    const payment = this.state.paymentMethodTitle
    this.setState({
      submitted: true,
      description: desc,
      amount: amount,
      date: date,
      payment: payment
    })

  }

  render() {
    return (
      <div className="App">
        <UserInput onSubmit={this.onSubmit} handleChange={this.handleChange} state={this.state} />
        <ExpensesTable />
      </div>
    );

  }
}

export default App;

