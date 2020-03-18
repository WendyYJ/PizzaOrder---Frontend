/* eslint-disable indent */
import { fetchIngredients } from '../../api/ingredient';

export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS';
export const FETCH_INGREDIENT = 'FETCH_INGREDIENT';
export const FETCH_INGREDIENT_FAILURE = 'FETCH_INGREDIENT_FAILURE';

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

export const loadIngredient = (category) => dispatch => {
    let count = 0;
    category.map(c => {
        fetchIngredients(c)
        .then(data => {
            console.log(count);
            count ++;
            dispatch(fetchIngredientSuccess(data,c));
            if (count === 4) {
                dispatch(fetchIngredient());
            }        
    }).catch(error => {
            dispatch(featchIngredientFailure(error.message));
    });
})
}