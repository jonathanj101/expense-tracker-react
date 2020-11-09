import React from 'react'
import { Table } from 'react-bootstrap'

const ExpensesTable = props => {
    return (
        <Table className='main-table' striped bordered hover >
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Payment Type</th>
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                <tr >
                    <th>Domino's Pizza</th>
                    <th>$35</th>
                    <th>Credit Card</th>
                    <th>10-20-2020</th>
                </tr>
                {/* {isSubmiited ? props.state.rows.map(row => <th>{row}</th>) : console.log('nope')} */}
                {/* {isSubmiited ? props.state.rows.map(row => <tr><th>{row}</th></tr>) : console.log('ok', props.state.rows)} */}
            </tbody>
        </Table >
    )
}

export default ExpensesTable
