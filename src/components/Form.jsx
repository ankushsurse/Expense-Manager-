import React, { useContext } from 'react'
import { useState } from 'react'
import GlobalContext from './Context/GlobalContext'
function Form() {
    const {saveTransaction} = useContext(GlobalContext)
    const handleSubmit = ((e) => {
        e.preventDefault()
        saveTransaction(text, amount)
        setText("")
        setAmount("")
    })
    
    const [text, setText] = useState("")
    const [amount, setAmount] = useState("")

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)} className="container amount_container w-100">
                <input value={text} onChange={(e) => setText(e.target.value)} type="text" className="form-control border-bottom transiction mt-3  container" id="text"
                    placeholder="Enter Your Transiction" />
                <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" className="form-control border-bottom Amount mt-3  container" id="number"
                    placeholder="Amount" />
                <button className=" container mt-3 btn btn-success" >SAVE TRANSACTION</button>
            </form>
        </>

    )
}

export default Form
