import React from 'react'
import { InputGroup, FormControl } from 'react-bootstrap'





const UserInput = props => {
    return (
        <div className="w-100">
            <p className="alert alert-primary" role="alert">Expenses</p>
            <div className="w-50">
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Desscription"
                        aria-label="Description"
                        ref={props.state.description}

                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Amount"
                        aria-label="Amount"
                        ref={props.state.amount}
                    />
                </InputGroup>
                <div className="dropdownt">
                    <button
                        className="btn btn-primary btn-block btn-lg dropdown-toggle mb-3" type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true">
                        {props.state.paymentMethodTitle}
                    </button>
                    <div className="dropdown-menu " aria-labelledby="dropdownMenu2">
                        <button
                            onClick={props.handleChange}
                            value="Cash"
                            className="dropdown-item"
                            type="button">
                            Cash
                        </button>
                        <button
                            onClick={props.handleChange}
                            value="Debit Card"
                            className="dropdown-item"
                            type="button">
                            Debit Card
                        </button>
                        <button
                            onClick={props.handleChange}
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
                        ref={props.state.date}
                    />
                </InputGroup>
                <div className="container">
                    <button
                        onClick={props.onSubmit}
                        type="submit"
                        className="btn btn-outline-success btn-block">
                        Add Expense
                    </button>
                </div>
            </div>
        </div >
    )
}
export default UserInput
