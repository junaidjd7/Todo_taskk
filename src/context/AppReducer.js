export default (state,action)=>{
    switch(action.type){
        case 'DELETE_TRANSACTION':
            return{
                ...state,
                transactions:state.transations&&state.transations.filter(transaction => transaction.id !== action.payload)
            }
            case 'Add_Transaction':
                return{
                    ...state,
                    transaction: [action.payload, ...state.transactions]
                }
        default:
            return state;
    }
    
}