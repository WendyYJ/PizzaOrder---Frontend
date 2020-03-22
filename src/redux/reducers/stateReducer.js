import {FETCH_STATE_SUCCESS, FETCH_CITY_SUCCESS, FETCH_STATE,FETCH_CITY} from '../actions/stateActions';

const initialState = {
    States:[],
    City:[],
    isLoading:false,
    errorMessage:'',
};

const stateReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STATE_SUCCESS:
            return {
                ...state,
                States:action.data,
            }
    }
}

export default stateReducer;





