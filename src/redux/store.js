import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { episodesReducer } from "./slices";


const rootReducer = combineReducers({
    episodes: episodesReducer
});

const store = configureStore({
    reducer: rootReducer
}
);

export { store }