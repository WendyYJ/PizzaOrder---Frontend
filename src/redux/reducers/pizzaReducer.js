
import {FETCH_PIZZA_SUCCESS, FETCH_PIZZA, FETCH_PIZZA_FAILURE, COUNT_UP, 
    COUNT_DOWN, ADD_CART,UPDATE_CART,DELETE_CART,UPDATE_COUNT,HANDLE_CLICK1,
    HANDLE_CLICK2, HANDLE_CLICK3, HANDLE_CLICK4, HANDLE_CLICK5,
    HANDLE_CLICK,ADD_CART_BUILDER} from '../actions/pizzaActions';



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

    pizzaImage:'',
    pizzaPrice:0,
    pizzaDesc:'',
    selectedPizzas:[],
    isLoading:false,
    errorMessage:'',
    isClick1: true,
    isClick2: false,
    isClick3: false,
    isClick4: false,
    isClick5: false,
    pizzaPriceSize:0,
    sizeChose: false,
    pizzaSize: 'small',
    totalPrice:0,
    mokeImage:"https://www.dominos.com.au/ManagedAssets/AU/product/P304/AU_P304_en_hero_4055.jpg?v-836867893"
    

  
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


            const selectedPizzasCopy = [];

            const samePizza=state.selectedPizzas.find(pizza => {
                              return pizza.key==state.pizzaName&&pizza.size==state.pizzaSize
                         })
                

          
             const pizzaIndex = state.selectedPizzas.findIndex( pizza => pizza.key == state.pizzaName);

            if (samePizza==undefined){
                return {
                    ...state,
                     selectedPizzas: [...state.selectedPizzas, {key: state.pizzaName,pizzaName:state.pizzaName,id:state.id,quantity: state.count
                     ,price:state.pizzaPriceSize,image: state.pizzaImage, currencyFormat:'$',size:state.pizzaSize}],

                };

            }else{

                state.selectedPizzas.map(pizza => {
                    selectedPizzasCopy.push(pizza)
                    
                })
                selectedPizzasCopy[pizzaIndex].quantity+=state.count
              
                return {
                    ...state,

                    selectedPizzas:selectedPizzasCopy
                }
                
             }


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

  
       



        case UPDATE_COUNT:
            return {
                ...state,
                count: state.count=1,
                isClick1: state.isClick1=true,
                isClick2: state.isClick2=false,
                isClick3: state.isClick3=false,
                isClick4: state.isClick4=false,
                isClick5: state.isClick5=false,
                pizzaSize:state.pizzaSize='Small',

           
  
                sizeChose: state.sizeChose=false,
                         
            };
        case HANDLE_CLICK1:
                return {
                    ...state,
                    sizeChose: state.sizeChose =true,
                    pizzaPriceSize: state.pizzaPrice,
                    isClick1: state.isShowing = true,
                    isClick2: state.isShowing = false,
                    isClick3: state.isShowing = false,
                    isClick4: state.isShowing = false,
                    isClick5: state.isShowing = false,
                    pizzaSize:state.pizzaSize='Small',
                  };

        case HANDLE_CLICK2:
                return {
                    ...state,
                    sizeChose: state.sizeChose =true,
                    pizzaPriceSize: state.pizzaPrice+=1,
                    isClick1: state.isShowing = false,
                    isClick2: state.isShowing = true,
                    isClick3: state.isShowing = false,
                    isClick4: state.isShowing = false,
                    isClick5: state.isShowing = false,
                    pizzaSize:state.pizzaSize='Medium',
                  };          
        case HANDLE_CLICK3:
                return {
                    ...state,
                    sizeChose: state.sizeChose =true,
                    pizzaPriceSize: state.pizzaPrice+=2,
                    isClick1: state.isShowing = false,
                    isClick2: state.isShowing = false,
                    isClick3: state.isShowing = true,
                    isClick4: state.isShowing = false,
                    isClick5: state.isShowing = false,
                    pizzaSize:state.pizzaSize='Large',
                  };    
        case HANDLE_CLICK4:
                return {
                    ...state,
                    sizeChose: state.sizeChose =true,
                    pizzaPriceSize: state.pizzaPrice+=3,
                    isClick1: state.isShowing = false,
                    isClick2: state.isShowing = false,
                    isClick3: state.isShowing = false,
                    isClick4: state.isShowing = true,
                    isClick5: state.isShowing = false,
                    pizzaSize:state.pizzaSize='Jumbo',
                          };  
                          
        case HANDLE_CLICK5:
                return {
                    ...state,
                    sizeChose: state.sizeChose =true,
                    pizzaPriceSize: state.pizzaPrice+=4,
                    isClick1: state.isShowing = false,
                    isClick2: state.isShowing = false,
                    isClick3: state.isShowing = false,
                    isClick4: state.isShowing = false,
                    isClick5: state.isShowing = true,
                    pizzaSize:state.pizzaSize='Party Size',
                    };  

        case HANDLE_CLICK:
                return {
                    ...state,
                    totalPrice: state.totalPrice+=5
                          
                    };  
        case ADD_CART_BUILDER:
            return {
                ...state,
                totalPrice:0,
                selectedPizzas: [...state.selectedPizzas, {key: 'DIY Pizza',quantity: 1
                ,price:state.totalPrice,image: state.mokeImage, id:state.id,currencyFormat:'$',size:state.pizzaSize}],
            }     
        default:
            return state;
    }

}

export default pizzaReducer;

