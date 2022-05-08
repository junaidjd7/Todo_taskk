import React,{useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

const Transaction = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+';
const{deleteTransaction} =useContext(GlobalContext)
  return (
    <li className={transaction.amount<0? 'minus' : 'plus'}> 
    {transaction.text}  <span> {sign}${Math.abs(transaction.amount)} </span> 
    <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button> </li>
  )
}

export default Transaction

// import React from 'react'

// export const Transaction = () => {
//     const sign = transaction.amount < 0 ? '-' : '+';

//   return (
//     <li className="minus"> {transaction.text}  <span> {sign}${transaction.amount} </span> <button class="delete-btn">x</button> </li>
//   )
// }


