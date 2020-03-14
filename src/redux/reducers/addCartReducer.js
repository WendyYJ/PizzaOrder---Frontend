import {ADD_CART} from "../actions/addCartActions"


const initialState={
    
}
const addCartReducer =(state=initialState, action)=>{
    switch(action.type){
        case ADD_CART:
            return {
                ...state,
                
          
            };
             
        default:
        return state;
    }

};
export default addCartReducer;