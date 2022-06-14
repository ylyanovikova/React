import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: []
}

const userSlice = createSlice({
    name: "userSlice", 
    initialState,
    reducers:{
        createUser: (state, action)=>{
            const {user} = action.payload;
            const newUser = {name: user, id: new Date().getTime()}
            state.users.push(newUser)
        },
        deleteById:(state, action)=>{
            const index = state.users.findIndex(value => value.id === action.payload);
            state.users.splice(index, 1);
        }
    }
});

const {reducer: userReducer, actions: {createUser, deleteById}} = userSlice;

export default userReducer;
export const userActions = {
    createUser,
    deleteById
}