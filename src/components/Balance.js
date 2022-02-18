import React, { useContext } from 'react'
import { Transactions } from '../context/GlobalContext'

export const Balance = (props) => {
    const transactions = useContext(Transactions)

    const amounts = transactions[0].map(transaction => transaction.amount)
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)

    return (
        <>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
        </>
    )
}
