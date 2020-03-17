import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import counterReducer from "./counterReducer";
import pizzaReducer from "./pizzaReducer";

const reducers = combineReducers({
  question: questionReducer,

  pizza: pizzaReducer
});

export default reducers;
