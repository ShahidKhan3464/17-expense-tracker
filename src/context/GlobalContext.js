import React, { useState, createContext } from 'react'

export const Transactions = createContext()

export const GlobalContext = (props) => {
    const [transactions, setTransactions] = useState([])
    return (
        <Transactions.Provider value={[transactions, setTransactions]}>
            {props.children}
        </Transactions.Provider>
    )
}
