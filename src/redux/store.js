import { combineReducers, configureStore} from "@reduxjs/toolkit";


import catReducer from "./slices/catSlice";
import dogReducer from "./slices/dog.slice";

const rootReducer = combineReducers({
    cats: catReducer,
    dogs: dogReducer
})

const store = configureStore({
    reducer: rootReducer
});

export default store;