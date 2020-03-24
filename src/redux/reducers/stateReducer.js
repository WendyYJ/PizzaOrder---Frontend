import {FETCH_CITY_SUCCESS, FETCH_CITY, FETCH_CITY_FAILURE, FETCH_ALL_SUCCESS } from '../actions/stateActions';

const initialState = {
    city:{},
    isLoading:true,
    errorMessage:'',
};

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
  
        case FETCH_CITY_SUCCESS: {
            return {
                ...state,
                city: action.data,
                isLoading:false,
            }
        }

        case FETCH_ALL_SUCCESS:{
            return {
                ...state,
                isLoading:false
            }
        }

        case FETCH_CITY: {
            return {
                ...state,
                isLoading:!state.isLoading,
            }
        }

        case FETCH_CITY_FAILURE : {
            return{
                ...state,
                errorMessage:action.errorMessage,
                isLoading:false,
              };
        }
        default:
            return state;
    }
}

export default stateReducer;





