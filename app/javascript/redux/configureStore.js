import { createStore, applyMiddleware, combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { messageReducer } from "./Greeting";

const mainReducer = combineReducers({
  greeting: messageReducer
})

const store = createStore(mainReducer, applyMiddleware(thunk))

export default store;