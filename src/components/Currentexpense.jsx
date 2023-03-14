import React, { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'

function Currentexpense() {
    const {transactions} = useContext(GlobalContext)
    const expense = transactions.filter((item) => {
        if (item.amount < 0) {
            return item
        }
    }).reduce((p, c) => {
        return p + c.amount
    },0)

    return (
        <>
            <div id='Current_expense' className="Current_expense bg-danger mt-3 text-center p-3 w-100 text-white rounded">
                <h6>CURRENT EXPENSE</h6>
                <h1>₹{expense}</h1>
            </div>
        </>
    )
}

export default Currentexpense
