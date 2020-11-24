import React from 'react'


const UserInput = props => {
    return (
        <form className='w-50 mx-auto'>
            <div className="mb-5">
                <p className="expense-title text-center">Expense Tracker</p>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        id="description"
                        name="description"
                        value={props.description}
                        onChange={props.handleChange}
                        required
                        placeholder="Restaurant, Grocery, Bills etc..." />
                </div>
                <div className="form-group col-md-6">
                    <input
                        type="number"
                        className="form-control form-control-lg"
                        id="amount"
                        name="amount"
                        value={props.amount}
                        onChange={props.handleChange}
                        required
                        placeholder="Amount" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input
                        type="date"
                        className="form-control form-control-lg"
                        id="date"
                        name="date"
                        value={props.date}
                        onChange={props.handleChange}
                        required
                        placeholder="Date of Expense" />
                </div>
                <div className="form-group col-md-6">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary btn-block btn-lg dropdown-toggle"
                            type="button"
                            id="dropdownMenu2"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            {props.payment}
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button
                                onClick={props.handleChange}
                                className="dropdown-item"
                                type="button"
                                name='payment'
                                value='Cash'>
                                Cash
                            </button>
                            <button
                                onClick={props.handleChange}
                                className="dropdown-item"
                                type="button"
                                name='payment'
                                value='Debit Card'>
                                Debit Card
                            </button>
                            <button
                                onClick={props.handleChange}
                                className="dropdown-item"
                                type="button"
                                name='payment'
                                value='Credit Card'>
                                Credit Card
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button
                onClick={props.onSubmit}
                type="submit"
                className="btn btn-success btn-block btn-lg  w-50 mx-auto mt-5">
                Add Expense
            </button>
        </form >
    )
}
export default UserInput
