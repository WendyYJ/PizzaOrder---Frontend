import {COUNT_UP} from "../actions/counterAction"
import {COUNT_DOWN} from "../actions/counterAction"


const initialState={
    count: 1,
}
const counterReducer =(state=initialState, action)=>{
    switch(action.type){
        case COUNT_UP:
            return {
                ...state,
                count: state.count+1
                
          
            };

        case COUNT_DOWN:
            return {
                ...state,
                count: state.count>1? state.count-1: state.count
                    
              
                };
             
        default:
        return state;
    }

};
export default counterReducer;