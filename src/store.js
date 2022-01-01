import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk';

let initialState = {total : 0,user : false};
const reducer = ( state = initialState,action) => {
    switch(action.type){
        case "INCREMENT-ITEM" :
            return {...action.payload,total : state.total + 1}
        case "DECREMENT_ITEM" : 
             return {...action.payload}  
        case "DELETE_ITEM":
             return {...action.payload}  
        case "USER_REGISTER" :
            return {...state,user : true}   
        case "CLEAN_STATE" :
            return {total : 0 , user : false}           
        default :
            return state;    
    }
}

const middlaware = thunk;
let Store = createStore(reducer,applyMiddleware(middlaware));

export default Store;