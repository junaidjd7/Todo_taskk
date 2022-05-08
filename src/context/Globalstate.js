import React,{createContext,useReducer} from 'react'
import AppReducer from './AppReducer';
// import App from '../App'

// Initial state
const initialState={
    transactions:  [
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
}
export const GlobalContext = createContext(initialState)

// providerComponent
export const GlobalProvider= ({children}) => {
    const [state,dispach]=useReducer(AppReducer,initialState);
  // action
    function deleteTransaction(id) {
        dispach({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(id) {
        dispach({
            type:'Add_Transaction',
            payload: transaction
        });
    }

    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>{children}</GlobalContext.Provider>)
}