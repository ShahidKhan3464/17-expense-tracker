import React, { useState, useContext } from 'react'
import { Transactions } from '..//context/GlobalContext'

export const AddTransaction = () => {
    const [transactions, setTransactions] = useContext(Transactions)
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount
        }
        setTransactions(transaction => [newTransaction, ...transactions])
        setText('')
        setAmount(0)
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Enter text..."
                        required
                    />
                </div>
                <div className="htmlForm-control">
                    <label htmlFor="amount">Amount <br />
                        (negative - expense, positive - income)</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
