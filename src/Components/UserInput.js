import React from 'react'


const UserInput = props => {
    const testing = () => {
        const description = document.getElementById('description').textContent
        const amount = document.getElementById('amount').textContent
        const date = document.getElementById('date').value
        const payment = document.getElementById('dropdownMenu2').textContent

        if (description === null || amount === null || date === null || payment === 'Payment Method') {
            alert("Empty Expense detail ==>> no Expense to track!!")
        } else {
            props.onSubmit()
        }
    }
    const handleChange = (e) => {
        let paymentTitle = document.getElementById('dropdownMenu2')
        paymentTitle.textContent = e.target.outerText
        console.log(e.target.textContent)
    }

    return (
        <form className='w-100'>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="description" placeholder="Restaurant, Grocery, Bills etc..." />
                </div>
                <div className="form-group col-md-6">
                    <input type="text" className="form-control" id="amount" placeholder="Amount" />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <input type="date" className="form-control" id="date" placeholder="Date of Expense" />
                </div>
                <div className="form-group col-md-6">
                    <div className="dropdown">
                        <button onClick={handleChange} className="btn btn-primary btn-block dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Payment Method
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                            <button onClick={handleChange} className="dropdown-item" type="button">Cash</button>
                            <button onClick={handleChange} className="dropdown-item" type="button">Debit Card</button>
                            <button onClick={handleChange} className="dropdown-item" type="button">Credit Card</button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={testing} type="button" className="btn btn-primary btn-block">Add Expense</button>
        </form >
    )
}
export default UserInput
