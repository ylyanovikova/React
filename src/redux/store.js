import { configureStore, combineReducers } from "@reduxjs/toolkit";

import { authReducer } from "./slices";

const rootReducer = combineReducers({
    authReducer
});

const store = configureStore({
    reducer: rootReducer
});

export { store }