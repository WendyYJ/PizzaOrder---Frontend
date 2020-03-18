import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import counterReducer from "./counterReducer";
import pizzaReducer from "./pizzaReducer";
import ingredientReducer from './ingredientReducer';

const reducers = combineReducers({
  question: questionReducer,
  pizza: pizzaReducer,
  ingredient: ingredientReducer,
});

export default reducers;
