import React, { Component } from 'react'
import {
    InputGroup, FormControl, Dropdown, DropdownButton
} from 'react-bootstrap'



export class UserInput extends Component {
    constructor() {
        super();

        this.state = { title: 'Payment Method' }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange = (event) => {
        console.log('selected');
        this.setState({ title: event })
    }
    render() {
        const { title } = this.state
        return (
            <div className="w-50">
                <p className="alert alert-primary" role="alert">Expenses</p>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Desscription"
                        aria-label="Description"

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Amount"
                        aria-label="Amount"
                    />
                </InputGroup>

                <DropdownButton className="btn mb-3" onSelect={this.handleChange} id="dropdown-basic-button" title={title}>
                    <Dropdown.Item as="button" eventKey="Cash">Cash</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Debit Card">Debit Card</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Credit Card">Credit Card</Dropdown.Item>
                </DropdownButton>
                <InputGroup >
                    <FormControl
                        placeholder='Date of Expense'
                        aria-label='Date of Expense'
                        type='date'
                    />
                </InputGroup>
            </div >
        )
    }
}

export default UserInput
