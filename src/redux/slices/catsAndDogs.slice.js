import { createSlice } from "@reduxjs/toolkit";


const initialState= {
    cats: [],
    dogs: []
}

const catsAndDogsSlice = createSlice({
    name: "catsAndDogsSlice",
    initialState,
    reducers:{
        addCat: (state, action) => {
            const cat = action.payload;
            console.log(cat);
            const newCat = {name: cat, id: new Date().getTime()};
            state.cats.push(newCat)
        },
        deleteCat: (state, action)=> {
            const index = state.cats.findIndex(cat => cat.id === action.payload);
            state.cats.splice(index, 1)
        },
        addDog: (state, action) => {
            const newDog = {name: action.payload, id: new Date().getTime()};
            state.dogs.push(newDog)
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(dog => dog.id === action.payload);
            state.dogs.splice(index, 1)
        }
    }
});

const {reducer: catsAndDogsReducer, actions: { addCat, addDog, deleteCat, deleteDog}} = catsAndDogsSlice;

export default catsAndDogsReducer;
export const catsDogsActions ={
    addCat,
    addDog,
    deleteCat,
    deleteDog
}