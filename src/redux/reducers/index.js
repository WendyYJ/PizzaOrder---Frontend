<<<<<<< HEAD
import { combineReducers } from 'redux';
import questionReducer from './questionReducer';
||||||| 3e92a9f
import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
=======
import { combineReducers } from "redux";
import questionReducer from "./questionReducer";
import counterReducer from "./counterReducer";
import pizzaReducer from "./pizzaReducer";
>>>>>>> 688506bfb4454bae7802f8091bca244dcd6b6ea7

const reducers = combineReducers({
<<<<<<< HEAD
  question: questionReducer,
||||||| 3e92a9f
  question: questionReducer
=======
  question: questionReducer,
  counter:counterReducer,
  pizza: pizzaReducer
>>>>>>> 688506bfb4454bae7802f8091bca244dcd6b6ea7
});

export default reducers;
