<<<<<<< HEAD
import { createStore } from 'redux';
||||||| 3e92a9f
import { createStore } from "redux";
=======
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../redux/reducers'
import {composeWithDevTools} from 'redux-devtools-extension';


export const store=createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));
>>>>>>> 688506bfb4454bae7802f8091bca244dcd6b6ea7

<<<<<<< HEAD
import reducers from './reducers';
||||||| 3e92a9f
import reducers from "./reducers";
=======
>>>>>>> 688506bfb4454bae7802f8091bca244dcd6b6ea7

