import { combineReducers } from "redux";
import questionReducer from "./questionReducer";

import pizzaReducer from "./pizzaReducer";
import filterReducer from "./filterReducer";

const reducers = combineReducers({
  question: questionReducer,
  filter: filterReducer,
  pizza: pizzaReducer
});

export default reducers;
