import React, { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'
import ResultItem from './ResultItem'
function Result() {
    const {transactions} = useContext(GlobalContext)
    return (
        <>
            {
                transactions.map((transaction) =>
                    <ResultItem key={transaction.id} transaction={transaction}  />
                )
            }
        </>
    )
}
export default Result
