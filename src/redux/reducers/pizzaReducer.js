import {FETCH_PIZZA_SUCCESS, FETCH_PIZZA, FETCH_PIZZA_FAILURE, COUNT_UP, COUNT_DOWN, ADD_CART} from '../actions/pizzaActions';

const initialState={
    count: 1,
    pizzaName:'',
    pizzaImage:'',
    pizzaPrice:0,
    pizzaDesc:'',
    selectedPizzas:[],
    isLoading:false,
    errorMessage:'',

    pizzaNameCopy:'',
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

        // check if there is same pizza in the array
        const samePizza=state.selectedPizzas.find(i => {
              return i.pizzaName=state.pizzaName
         })

         // find the index of the same pizza
         const isSamePizza = pizza => pizza.pizzaName = state.pizzaName;
         const pizzaIndex = state.selectedPizzas.findIndex(isSamePizza);

      
        console.log(pizzaIndex)
        console.log(samePizza)
        console.log(state.selectedPizzas)

         //if no same pizza in the array
        if (samePizza==undefined){
      
            return {
                
                ...state,
                selectedPizzas: [...state.selectedPizzas, {pizzaName: state.pizzaName,quantity: state.count
                              ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$',}]
 
            } 
            } else{
                // find the index of the same pizza and change the quantity..



                // return {
                
                //     ...state,
                //     selectedPizzas: [...state.selectedPizzas, {pizzaName: state.pizzaName,quantity: state.count
                //         ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$',}]
                // } 

             
        }

             
 
        

    
  
     
            default:
                return state;
    }

}

export default pizzaReducer;

 // selectedPizzas: state.selectedPizzas.forEach(i => {
                //     if (!state.pizzaName == i.pizzaName){
                //          return [...state.selectedPizzas, {pizzaName: state.pizzaName,quantity: state.count
                //        ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$',}]

                //     } else {
                //         return i.quantity += state.quantity
                //     }
                // })