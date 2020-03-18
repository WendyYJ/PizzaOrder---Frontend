import { FETCH_INGREDIENT_SUCCESS, FETCH_INGREDIENT, FETCH_INGREDIENT_FAILURE } from '../actions/ingredientAction';

const initialState = { 
  MEATS:[],
  SAUCES:[],
  CHEESES:[],
  VEGGIGS:[],
  isLoading:false,
  errorMessage:'',
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENT_SUCCESS:
      if( action.category === 'MEATS') {
        return {
          ...state,
          MEATS: action.data,
        }
      }
      if( action.category === 'SAUCES') {
        return {
          ...state,
          SAUCES: action.data,
        }
      }
      if( action.category === 'CHEESES') {
        return {
          ...state,
          CHEESES: action.data,
        }
      }
      if( action.category === 'VEGGIGS') {
        return {
          ...state,
          VEGGIGS: action.data,
        }
      }
    case FETCH_INGREDIENT:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case FETCH_INGREDIENT_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    default: return state;
  }
};

export default ingredientReducer;
