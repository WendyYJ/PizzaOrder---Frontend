import {fetchPizzaById} from '../../api/pizza'
export const FETCH_PIZZA ='FETCH_PIZZA';
export const FETCH_PIZZA_SUCCESS ='FETCH_PIZZA_SUCCESS';
export const FETCH_PIZZA_FAILURE ='FETCH_PIZZA_FAILURE';


export const fetchPizza = () => ({
   
        type:FETCH_PIZZA,


});


export const fetchPizzaSuccess= data => ({
   
        type:FETCH_PIZZA_SUCCESS,
        data,


});

export const fetchPizzaFaliure = errorMessage => ({
        type:FETCH_PIZZA_FAILURE,
        errorMessage,
    
    });

export const loadPizza= id => dispatch => {
        dispatch(fetchPizza());
        fetchPizzaById(id).then(data => {
            const pizzaName = data.PizzaName;
            const pizzaPrice = data.UnitPrice;
            const pizzaDesc = data.Description;
       
            dispatch(fetchPizzaSuccess({
                pizzaName,
                pizzaPrice,
                pizzaDesc,
            }));
        })
        .catch(error => {
            dispatch(fetchPizzaFaliure(error.message));
    
        });
    
    };
