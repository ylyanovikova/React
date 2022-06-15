import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cats: []
}
const catSlice = createSlice({
    name: "catSlice",
    initialState,
    reducers: {
        addCat: (state, action)=>{
            const name = action.payload.name
            const newCat = {name, id: new Date().getTime()};
            state.cats.push(newCat)
        },
        deleteCat:(state, action)=>{
            const index = state.cats.findIndex(value=> value.id===action.payload);
            state.cats.splice(index, 1);
        }
    }
});

const {reducer: catReducer, actions: {addCat, deleteCat}} = catSlice;

export default catReducer;

export const catActions={
    addCat,
    deleteCat
}