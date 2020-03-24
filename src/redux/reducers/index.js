import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import counterReducer from "./counterReducer";
import pizzaReducer from "./pizzaReducer";
import stateReducer from "./stateReducer";

const reducers = combineReducers({
  question: questionReducer,
  pizza: pizzaReducer,
  state: stateReducer,
});

export default reducers;
