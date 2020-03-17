<<<<<<< HEAD
import { ADD_CART } from "../actions/addCartActions"
=======
import { ADD_CART } from '../actions/addCartActions';
>>>>>>> 1677abfaf908a018f97a555251e06b322285aaee


const initialState = {

};
const addCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART:
      return {
        ...state,


      };

    default:
      return state;
  }
};
export default addCartReducer;
