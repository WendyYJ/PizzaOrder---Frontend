import {FETCH_PIZZA_SUCCESS, FETCH_PIZZA, FETCH_PIZZA_FAILURE, COUNT_UP, COUNT_DOWN, ADD_CART,UPDATE_CART, DELETE_CART} from '../actions/pizzaActions';


const initialState={
  count: 1,
  pizzaName:'',
  pizzaImage:'',
  pizzaPrice:0,
  pizzaDesc:'',
  selectedPizzas:[],
  isLoading:false,
  errorMessage:'',
  selectedPizzas2:[],
  pizza: {
    quantity: 1,
    pizzaName:'',
    image:'',
    price:0,
    currencyFormat:'$',
  }
}


const pizzaReducer = (state=initialState,action) => {
  switch(action.type){
    case FETCH_PIZZA_SUCCESS:
      return{
        ...state,
        pizzaName : action.data.pizzaName,
        id: action.data.id,
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
      return {
        ...state,
        pizza: {
          pizzaName : state.pizzaName,
          id:state.id,
          quantity: state.count,
          image: state.pizzaImage,
          price: state.pizzaPrice,               
        },  
        selectedPizzas: [...state.selectedPizzas, {pizzaName: state.pizzaName,id:state.id,quantity: state.count
          ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$'}] 
      };

    case UPDATE_CART:
      const changedPizzas = [];
      state.selectedPizzas.map(product => {
        if(product.id === action.id) {
          changedPizzas.push({...product,quantity: action.quantity})
        } else {
          changedPizzas.push(product);
        }
      })
      return {
        ...state,
        selectedPizzas:changedPizzas,
      }
            
    case DELETE_CART:
        const revisedPizzas = [];
        state.selectedPizzas.map(product => {
            if(product.id != action.id) {
              revisedPizzas.push(product);
            }
          })
        return {
            ...state,
            selectedPizzas:revisedPizzas,
        }
    default:
      return state;
  }

}

export default pizzaReducer;