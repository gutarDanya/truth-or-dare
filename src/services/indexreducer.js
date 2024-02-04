import { createTaskReducer } from "./reducers/createTaskReducer";
import settingsReducer from "./reducers/SettingsReducer";
import { combineReducers, createStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
    createTaskReducer,
    settingsReducer
})

export const store = createStore(rootReducer)