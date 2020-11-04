import React, { Component } from 'react'
import { InputGroup, FormControl, Table } from 'react-bootstrap'



export class UserInput extends Component {
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
        const { paymentMethodTitle, submitted, description, amount, date, payment } = this.state
        return (
            <div className="w-100">
                <p className="alert alert-primary" role="alert">Expenses</p>
                <div className="w-50">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Desscription"
                            aria-label="Description"
                            ref={this.descriptionInput}

                        />
                    </InputGroup>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Amount"
                            aria-label="Amount"
                            ref={this.amountInput}
                        />
                    </InputGroup>
                    <div className="dropdownt">
                        <button
                            className="btn btn-primary btn-block btn-lg dropdown-toggle mb-3" type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true">
                            {paymentMethodTitle}
                        </button>
                        <div className="dropdown-menu " aria-labelledby="dropdownMenu2">
                            <button
                                onClick={this.handleChange}
                                value="Cash"
                                className="dropdown-item"
                                type="button">
                                Cash
                        </button>
                            <button
                                onClick={this.handleChange}
                                value="Debit Card"
                                className="dropdown-item"
                                type="button">
                                Debit Card
                        </button>
                            <button
                                onClick={this.handleChange}
                                value="Credit Card"
                                className="dropdown-item"
                                type="button">
                                Credit Card
                        </button>
                        </div>
                    </div>

                    {/* <DropdownButton className="btn mb-3" onSelect={this.handleChange} id="dropdown-basic-button" title={title}>
                    <Dropdown.Item as="button" eventKey="Cash">Cash</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Debit Card">Debit Card</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Credit Card">Credit Card</Dropdown.Item>
                </DropdownButton> */}
                    <InputGroup >
                        <FormControl
                            placeholder='Date of Expense'
                            aria-label='Date of Expense'
                            type='date'
                            ref={this.dateInput}
                        />
                    </InputGroup>
                    <div className="container">
                        <button
                            onClick={this.onSubmit}
                            type="submit"
                            className="btn btn-outline-success btn-block">
                            Add Expense
                    </button>
                    </div>
                </div>
            </div >
        )
    }
}


export default UserInput
