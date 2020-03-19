import {FETCH_PIZZA_SUCCESS, FETCH_PIZZA, FETCH_PIZZA_FAILURE, COUNT_UP, COUNT_DOWN, ADD_CART} from '../actions/pizzaActions';

const initialState={
    count: 1,
    pizzaName:'',
    pizzaImage:'',
    pizzaPrice:0,
    pizzaDesc:'',
    selectedPizzas:[{ 
             id:"12345",
             pizzaName:"Prawn Pizza",
             image:"https://www.dominos.com.au/ManagedAssets/AU/product/P355/AU_P355_en_hero_3177.png?v-560733922",
             price:22,
             size:"Large",
             quantity:1,
             currencyFormat:'$',
             itemPrice:22,
             },
             {id:"12346",
             pizzaName:"Beef Pizza",
             image:"https://www.dominos.com.au/ManagedAssets/AU/product/P322/AU_P322_en_hero_3177.png?v693830719",
             price:25,
             size:"Jumbo",
             quantity:1,
             currencyFormat:'$',
             itemPrice:25,
             },
             {id:"12347",
             pizzaName:"Chicken Pizza",
             image:"https://www.dominos.com.au/ManagedAssets/AU/product/P223/AU_P223_en_hero_4055.jpg?v-233754517",
             price:18,
             size:"Small",
             quantity:2,
             currencyFormat:'$',
             itemPrice:36,
             }],
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
                    quantity: state.count,
                    image: state.pizzaImage,
                    price: state.pizzaPrice,                 
                },

             
                selectedPizzas: [...state.selectedPizzas, {pizzaName: state.pizzaName,quantity: state.count
                ,price:state.pizzaPrice,image: state.pizzaImage, currencyFormat:'$',}]

            
            };
            
            default:
                return state;
    }

}

export default pizzaReducer;