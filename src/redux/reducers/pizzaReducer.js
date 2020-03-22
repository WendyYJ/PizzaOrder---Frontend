import {FETCH_PIZZA_SUCCESS, FETCH_PIZZA, FETCH_PIZZA_FAILURE, COUNT_UP, COUNT_DOWN, ADD_CART,UPDATE_CART, updateCart} from '../actions/pizzaActions';


const initialState={
    count: 1,
    pizzaName:'',
    pizzaImage:'',
    pizzaPrice:0,
    pizzaDesc:'',
    selectedPizzas:[],
    isLoading:false,
    errorMessage:'',

 
  
}


const pizzaReducer = (state=initialState,action) => {
    switch(action.type){
        case FETCH_PIZZA_SUCCESS:
            return{
                ...state,
                pizzaName : action.data.pizzaName,
                pizzaPrice : action.data.pizzaPrice,
                pizzaDesc : action.data.pizzaDesc,
                pizzaImage : action.data.pizzaImage,
                isLoading:false,
            };
        case FETCH_PIZZA:
            return{
                ...state,
                isLoading:true,
                errorMessage:'',

            };
        case FETCH_PIZZA_FAILURE:
            return{
                ...state,
                errorMessage:action.errorMessage,
                isLoading:false,

            };
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

        case ADD_CART:
            // check if there is same pizza in the array
        

            const samePizza=state.selectedPizzas.find(i => {
                              return i.pizzaName==state.pizzaName
                         })
                

          
             const pizzaIndex = state.selectedPizzas.findIndex( pizza => pizza.pizzaName == state.pizzaName);

            if (samePizza==undefined){
                return {
                    ...state,
                     selectedPizzas: [...state.selectedPizzas, {pizzaName: state.pizzaName,quantity: state.count
                     ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$'}],

                };

            }else{
                
              
                state.selectedPizzas[pizzaIndex].quantity += state.count;
                return state;
                
             }



        case UPDATE_CART:
            const index = state.selectedPizzas.findIndex(product => product.id === action.id) 
            state.selectedPizzas[index].quantity = action.quantity;
            state.selectedPizzas[index].itemPrice = state.selectedPizzas[index].price * action.quantity;
            return state;
                
        default:
            return state;
    }

}

export default pizzaReducer;

