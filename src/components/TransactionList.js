import React, { useContext } from 'react'
import { Transaction } from './Transaction'
import { Transactions } from '..//context/GlobalContext'

export const TransactionList = () => {
    const transactions = useContext(Transactions)
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions[0].map(transaction => <Transaction transaction={transaction} />)}
            </ul>
        </>
    )
}
