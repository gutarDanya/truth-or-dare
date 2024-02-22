import { createTaskReducer } from "./reducers/createTaskReducer";
import settingsReducer from "./reducers/SettingsReducer";
import { combineReducers, createStore } from "@reduxjs/toolkit";
import switchTaskReducer from "./reducers/switchTaskReducer";

const rootReducer = combineReducers({
    createTaskReducer,
    settingsReducer,
    switchTaskReducer
})

export const store = createStore(rootReducer)