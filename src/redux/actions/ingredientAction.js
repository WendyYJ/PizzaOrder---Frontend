import { fetchIngredients } from '../../api/ingredient';

export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT = 'FETCH_INGREDIENT';
export const FETCH_INGREDIENT_FAILURE = 'FETCH_INGREDIENT_FAILURE';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';

export const fetchIngredient = () => ({
    type:FETCH_INGREDIENT,
});

export const fetchIngredientSuccess = (data, category) => ({
    type:FETCH_INGREDIENT_SUCCESS,
    data,
    category,
});

export const featchIngredientFailure = errorMessage => ({
    type:FETCH_INGREDIENT_FAILURE,
    errorMessage,
});

export const fetchAll = () => ({
    type:FETCH_ALL_SUCCESS,
});

export const loadIngredient = (category) => dispatch => {
    let count = 0;
    dispatch(fetchIngredient());
    category.map(c => {
        fetchIngredients(c)
        .then(data => {
            count ++;
            dispatch(fetchIngredientSuccess(data,c));
            if(count === 4) {
                dispatch(fetchAll());
            }     
    }).catch(error => {
            dispatch(featchIngredientFailure(error.message));
    });
  })
}