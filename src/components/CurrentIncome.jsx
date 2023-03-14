import React, { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
function CurrentIncome() {

    const {transactions} = useContext(GlobalContext)

    const income = transactions.filter((item) => {
        if (item.amount > 0) {
            return item
        }
    }).reduce((p, c) => {
        return p + c.amount
    },0)

    return (
        <>
            <div id='Current_income' className="Current_income bg-success text-center p-3 w-100 text-white rounded">
                <h6> CURRENT INCOME</h6>
                <h1>{income}</h1>
            </div>
        </>
    )
}

export default CurrentIncome
