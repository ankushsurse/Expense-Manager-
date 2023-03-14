import React, { useContext } from 'react'
import GlobalContext from './components/Context/GlobalContext'
function Currentbalance() {

    const {transactions} = useContext(GlobalContext)

    const totalBalance = transactions.reduce((p, c) => {
        return p + c.amount
    }, 0)
    return (
        <>
            <div id="current_balance" className="current_balance_content container w-50 text-center mb-3 p-5 rounded">
                <h6>Current Balance</h6>
                <h1>{totalBalance}</h1>
            </div>
        </>
    )
}

export default Currentbalance
