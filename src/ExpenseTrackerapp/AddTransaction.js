import React,{useState,useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

const AddTransaction = () => {
  const[text,setText]=useState()
  const [amount,setAmount]=useState()
  
  const{addTransaction} =useContext(GlobalContext)
  const onSubmit =(e)=>{
    e.preventDefault();
  
  const newTransaction={
    id:Math.floor(Math.random() * 100000000), 
    text,
    amount:+amount
  }
  addTransaction(newTransaction);
}
  return (
    <>
        <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div ClassName="form-control">
          <label htmlfor="text">Text</label>
          <input type="text"  placeholder="Enter text..." value={text} onChange={(e)=>setText(e.target.value)}/>
        </div>

        <div ClassName="form-control">
          <label htmlfor="amount">Amount <br/>
            (negative - expense, positive - income)</label>
          <input type="number"  placeholder="Enter amount..." value={amount} onChange={(e)=>setAmount(e.target.value)} />
        </div>

        <button ClassName="btn">Add transaction</button>
      </form>
     </>
      
    
  )
}

export default AddTransaction
