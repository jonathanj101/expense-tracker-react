import React, { Component, } from 'react'
import {
    InputGroup, FormControl, Dropdown
} from 'react-bootstrap'


export class UserInput extends Component {
    render() {
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
                <Dropdown onSelect={e => {
                    console.log(e)
                    console.log(Dropdown.contextTypes)
                    Dropdown.nodeValue = e
                }}>
                    <Dropdown.Toggle variant='success' id='dropdown-basic'>
                        Payment Type
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey='Cash' >Cash</Dropdown.Item>
                        <Dropdown.Item eventKey='Debit Card'>Debit Card</Dropdown.Item>
                        <Dropdown.Item eventKey='Credit Card'>Credit Card</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <InputGroup >
                    <FormControl
                        placeholder='Date of Expense'
                        aria-label='Date of Expense'
                        type='date'
                    />
                </InputGroup>
            </div>
        )
    }
}

export default UserInput
