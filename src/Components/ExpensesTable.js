import React from 'react'
import { Table } from 'react-bootstrap'

const ExpensesTable = (props) => {
    const expenses = props.expenses
    const expense = expenses.map((expense, num) => {
        return (
            <tr
                className="strikethrough"
                data-toggle="tooltip"
                data-placement="top"
                title="Want to delete? Just click!"
                onClick={() => props.deleteExpense(expense.id)}
                key={num}>
                <td>{num + 1}</td>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.payment}</td>
                <td>{expense.date}</td>
            </tr>
        )
    })

    return (
        <Table className='main-table w-75 mx-auto mt-5 text-center' striped bordered hover >
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