import React, { useContext } from 'react'
import GlobalContext from './Context/GlobalContext'

const ResultItem = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <>
            <ul className="list-group-item d-flex mb-3 container result text-center text-white bg-dark rounded">
                <li className={transaction.amount > 0 ? "bg-success" : "bg-danger"}>{transaction.amount}</li>
                <h3 className="w-100">{transaction.text}</h3>
                <button className="btn btn-danger" onClick={(() => deleteTransaction(transaction.id))}  ><i className="bi bi-trash"></i></button>
            </ul>
        </>
    )
}

export default ResultItem
