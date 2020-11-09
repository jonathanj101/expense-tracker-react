import React from 'react'
import { Table } from 'react-bootstrap'

const ExpensesTable = props => {
    console.log(props)
    const isSubmiited = props.state.submitted



    return (
        <Table className='main-table' striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Payment Type</th>
                    <th>Date</th>
                    <th>Delete</th>
                </tr>
            </thead>

            <tbody>
                <tr >
                    <th>1</th>
                    <th>Domino's Pizza</th>
                    <th>$35</th>
                    <th>Credit Card</th>
                    <th>10-20-2020</th>
                    <th className="close">&times;</th>
                </tr>
                {isSubmiited ? props.state.rows.map(row => <tr><th>{row}</th></tr>) : console.log('nope')}
            </tbody>
        </Table >
    )

}

export default ExpensesTable
