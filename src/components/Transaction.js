import React, { useContext } from 'react'
import { Transactions } from '../context/GlobalContext'

export const Transaction = (props) => {
    const [transactions, setTransaction] = useContext(Transactions)
    const sign = props.transaction.amount < 0 ? '-' : '+'

    const handleClick = (e) => {
        const id = props.transaction.id
        setTransaction(delTransaction => [...transactions.filter(transaction => transaction.id !== id)])
    }

    return (
        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign}${Math.abs(props.transaction.amount)}</span>
            <button className="delete-btn" onClick={handleClick}>x</button>
        </li>
    )
}
