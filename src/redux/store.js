import { createStore } from "redux";
import { applyMiddleware } from "redux";
import { compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from './reducers'

const middleWare = [thunk]
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const intialState = {}

export default createStore(rootReducer,intialState,composeEnhancer(applyMiddleware(...middleWare)));