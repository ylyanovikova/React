import { createSlice } from "@reduxjs/toolkit";

const initState={
    dogs: []
}

const dogSlice = createSlice({
    name: "dogSlice",
    initialState: initState,
    reducers:{
        addDog: (state, action)=>{
            const newDog = {name: action.payload, id: new Date().getTime()};
            state.dogs.push(newDog)
        },
        deleteDog: (state, action)=>{
            const index = state.dogs.findIndex(value=> value.id === action.payload);
            state.dogs.splice(index, 1)
        }
    }
});

const {reducer: dogReducer, actions: {addDog, deleteDog}} = dogSlice;

export default dogReducer;
export const dogActions = {
    addDog,
    deleteDog
}