import {combineReducers, configureStore} from "@reduxjs/toolkit";

import catsAndDogsReducer from "./slices/catsAndDogs.slice";


const rootReducer = combineReducers({
    catsAndDogs: catsAndDogsReducer
})
const store = configureStore({
    reducer: rootReducer
});

export default store;