import Store from "./store"

export const setData =(Data) => (dispatch,getState) =>{
    let state = Store.getState();
    let itemID = Data.itemID;// get restaurant ID;
    let foodName = Data.name;
    let foodPrice = Data.price;
    let img = Data.image
    if(state[itemID]){//check restaurant status in state
        let newFoodID = Data.foodID;//get foodID for set data
        let lists = state[itemID];
        let updateState;
        for(let [index,list] of lists.entries()){
            if(list[newFoodID]){
                let prevCount = list[newFoodID].count;
                let updateCount = prevCount + 1;
                updateState = {...state};
                updateState[itemID][index][newFoodID].count = updateCount;
                state = {...updateState};
                dispatch({type : "INCREMENT-ITEM",payload : state})
                return;
            }
        }
        updateState = {...state};
        lists.push({[newFoodID] : {count : 1,name : foodName,price : foodPrice,image : img}});
        updateState[itemID] = lists;
        state = {...updateState};
        dispatch({type : "INCREMENT-ITEM",payload : state})

    }else{
        let firstfoodID = Data.foodID;//get foodID for set data
        state = {...state,...{[itemID] :[{[firstfoodID] : {count :1,name : foodName, price : foodPrice,image : img}}]}};
        dispatch({type : "INCREMENT-ITEM",payload : state})
    }

}

export const changeData = (restaurant_id,food_id,value) => (dispatch,getState) => {
    let state = getState();
    let targetItem  = state[restaurant_id];
    let newCount = value;
    let prevCount;
    let updateState = state;
    let totalAction;
    for (let [index,item] of targetItem.entries()){
        if(item[food_id]){
                prevCount = updateState[restaurant_id][index][food_id].count;
                updateState[restaurant_id][index][food_id].count = newCount;
                totalAction = newCount - prevCount;
                state.total = state.total + (totalAction);
                dispatch({type : "DECREMENT_ITEM",payload :state});
                break;
        }
    }
}

export const changeCount = (restaurant_id,food_id) => (dispatch,getState) => {
    let state = getState();
    let food;
    let prevCount;
    let newCount;
    let restaurant = state[restaurant_id];
    for(let i = 0;i<state[restaurant_id].length ;i++){
        for(let item in state[restaurant_id][i]){
            if(item === food_id){
                food = state[restaurant_id][i][food_id];
                prevCount = food.count;
                newCount = parseInt(state.total) - parseInt(prevCount);
                state.total = newCount;
                delete state[restaurant_id][i][food_id];
                state[restaurant_id].splice(i,1);
            }
            let check =   !restaurant.length ? delete state[restaurant_id] : "";
            dispatch({type:"DELETE_ITEM",payload : {...state}});
            return
        }
    }
}

export const registerUser = () => (dispatch) => {
    dispatch({ type : "USER_REGISTER"});
}

export const cleanState = () => (dispatch) => {
    dispatch({type : "CLEAN_STATE"});
}