import { createTaskReducer } from "./reducers/createTaskReducer";
import { combineReducers, createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    createTaskReducer
})

export const store = createStore(rootReducer)