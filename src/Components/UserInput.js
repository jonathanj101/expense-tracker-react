import React, { Component, } from 'react'
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
        console.log(event);
        this.setState({ title: event })
    }
    render() {
        const { title } = this.state
        return (
            <div>
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
                <DropdownButton className="mb-3" onSelect={this.handleChange} id="dropdown-basic-button" title={title}>
                    <Dropdown.Item as="button" eventKey="Cash">Cash</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Debit Card">Debit Card</Dropdown.Item>
                    <Dropdown.Item as="button" eventKey="Credit Card">Credit Card</Dropdown.Item>
                </DropdownButton>
                {/* <div class="input-group mb-3">
                    <select
                        onChange={this.handleChange}
                        className="custom-select"
                        id="inputGroupSelect01"
                        placeholder='Payment Method'
                    >
                        <option selected>Payment Method</option>
                        <option value="cash">Cash</option>
                        <option value="debit-card">Debit Card</option>
                        <option value="credi-card">Credit Card</option>
                    </select>
                </div> */}
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
