import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { repositoriesReducer } from "./repositories";

const rootReducer = combineReducers({
  repositoriesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

export default store;

window.store = store;
