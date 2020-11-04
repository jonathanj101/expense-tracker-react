import React from 'react'
import { Table } from 'react-bootstrap'
// import UserInput from './UserInput'

function ExpensesTable() {

    return (
        <Table className='main-table' striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Payment Type</th>
                    <th>Date</th>
                </tr>
            </thead>

            <tbody>
                <tr >
                    <th>1</th>
                    <th>Domino's Pizza</th>
                    <th>$35</th>
                    <th>Credit Card</th>
                    <th>10-20-2020</th>
                </tr>
            </tbody>
        </Table >
    )

}

export default ExpensesTable
