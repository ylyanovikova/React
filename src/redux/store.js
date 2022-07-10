import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer, carReducer } from "./slices";

const rootReducer = combineReducers({
    authReducer,
    carReducer
});

const store = configureStore({
    reducer: rootReducer
});

export { store }