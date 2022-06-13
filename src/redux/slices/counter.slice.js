import { createSlice } from "@reduxjs/toolkit";

const initialState={
    count1: 0,
    count2: 0
}

const counterSlice = createSlice({
    name: "createSlice",
    initialState,
    reducers:{
        inc:(state)=>{
            state.count1 +=1;
        },
        dec:(state)=>{
            state.count1--
        },
        reset:(state, action)=>{
            state.count1 = action.payload || 0
        },
        inc2:(state)=>{
            state.count2 +=2
        },
        dec2:(state)=>{
            state.count2 -=2
        },
        upTo20: (state)=>{
            state.count2 = 20
        }
    }
});

const {reducer: counterReducer, actions: {inc, dec, reset, dec2, inc2, upTo20}} = counterSlice;

export default counterReducer;
export const counterActions ={
    inc,
    dec, 
    reset,
    inc2,
    dec2,
    upTo20
}