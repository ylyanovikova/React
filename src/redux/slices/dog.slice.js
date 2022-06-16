import { createSlice } from "@reduxjs/toolkit";

const initState = {
    dogs: [],
    dogForUpdate: null
}

const dogSlice = createSlice({
    name: "dogSlice",
    initialState: initState,
    reducers: {
        addDog: (state, action) => {
            const newDog = { name: action.payload, id: new Date().getTime() };
            state.dogs.push(newDog)
        },
        deleteDog: (state, action) => {
            const index = state.dogs.findIndex(value => value.id === action.payload);
            state.dogs.splice(index, 1)
        },
        setDogForUpdate: (state, action) => {
            state.dogForUpdate = action.payload.dog;
        },
        updateDog: (state, action) => {
            const { id, name } = action.payload;
            const index = state.dogs.findIndex(dog => dog.id === id);
            state.dogs[index].name = name;
            state.dogForUpdate = false;
        }
    }
});

const { reducer: dogReducer, actions: { addDog, deleteDog, setDogForUpdate, updateDog } } = dogSlice;

export default dogReducer;
export const dogActions = {
    addDog,
    deleteDog,
    setDogForUpdate,
    updateDog
}