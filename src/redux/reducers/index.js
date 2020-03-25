import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import filterReducer from "./filterReducer";
import pizzaReducer from "./pizzaReducer";
import ingredientReducer from './ingredientReducer';

const reducers = combineReducers({
  question: questionReducer,
  pizza: pizzaReducer,
  ingredient: ingredientReducer,

  filter: filterReducer,

});

export default reducers;
