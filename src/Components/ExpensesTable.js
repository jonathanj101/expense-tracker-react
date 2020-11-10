import React from 'react'
import { Table } from 'react-bootstrap'

const ExpensesTable = (props) => {
    const expenses = props.state.rows;
    console.log(expenses)
    const expense = expenses.map((expense, num) => {
        return (
            <tr>
                <th>{num}</th>
                <th>{expense[0]}</th>
                <th>{expense[1]}</th>
                <th>{expense[2]}</th>
                <th>{expense[3]}</th>
            </tr>
        )
    })
    console.log(expense)
    // const isSubmitted = props.state.submitted
    // console.log(typeof (props.state.rows))
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
                {expense}
            </tbody>
        </Table >
    )
}

export default ExpensesTable
// {isSubmitted ? console.log(expense) : console.log(expense)}                 {/* {isSubmitted ? props.state.rows.map(row => <tr><th>{row}</th></tr>) : console.log('nope')} */}                 {/* {isSubmiited ? props.state.rows.map(row => <tr><th>{row}</th></tr>) : console.log('ok', props.state.rows)} */}