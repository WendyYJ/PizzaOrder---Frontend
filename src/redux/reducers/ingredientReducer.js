import {
  FETCH_INGREDIENT_SUCCESS,
  FETCH_INGREDIENT,
  FETCH_INGREDIENT_FAILURE,
  FETCH_ALL_SUCCESS,
} from '../actions/ingredientAction';

const initialState = {
  MEATS: [],
  SAUCES: [],
  CHEESES: [],
  VEGGIGS: [],
  isLoading: false,
  errorMessage: '',
};

const ingredientReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INGREDIENT_SUCCESS:
      if (action.category === 'MEATS') {
        return {
          ...state,
          MEATS: action.data,
          isLoading: true,
        };
      }
      if (action.category === 'SAUCES') {
        return {
          ...state,
          SAUCES: action.data,
          isLoading: true,
        };
      }
      if (action.category === 'CHEESES') {
        return {
          ...state,
          CHEESES: action.data,
          isLoading: true,
        };
      }
      if (action.category === 'VEGGIGS') {
        return {
          ...state,
          VEGGIGS: action.data,
          isLoading: true,
        };
      }
    case FETCH_INGREDIENT:
      return {
        ...state,
        isLoading: true,
      };

    case FETCH_ALL_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };

    case FETCH_INGREDIENT_FAILURE:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default ingredientReducer;
