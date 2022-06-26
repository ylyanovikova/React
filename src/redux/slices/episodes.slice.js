import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import { episodesService } from '../../services/episodes.service';

const initialState = {
    pages: null,
    prev: null,
    next: null,
    episodes: []
};

const getAll = createAsyncThunk(
    "episodesSlice/getAll",
    async({page})=>{
        const {data} = await episodesService.getAll(page);
        console.log(data);
        return data;
    }
);

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    extraReducers: (builder)=> {
        builder
            .addCase(getAll.fulfilled, (state, action)=>{
                const { info: {pages, prev, next}, results} = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.episodes = results;
            })
    }

});

const {reducer: episodesReducer} = episodesSlice;

export {episodesReducer};

export const episodesActions = {
    getAll
};








// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { episodesService } from "../../services";


// const initState = {
//     prev: null,
//     next: null,
//     pages: null,
//     episodes: []
// };

// // const getAll = createAsyncThunk(
// //     "episodesSlice/getAll",
// //     async ({ page }) => {
// //         const { data } = await episodesService.getAll(page);
// //         console.log(data);
// //         return data;
// //     }
// // );

// const episodesSlice = createSlice({
//     name: "episodesSlice",
//     initState,
//     // extraReducers: (builder) => {
//     //     builder
//     //         .addCase(getAll.fulfilled, (state, action) => {
//     //             const { pages, prev, next, results } = action.payload;
//     //             state.pages = pages;
//     //             state.prev = prev;
//     //             state.next = next;
//     //             state.episodes = results;
//     //         })
//     // }
// });

// const { reducer: episodesReducer } = episodesSlice;

// const episodesActions = {
//     // getAll
// }

// export {
//     episodesReducer,
//     episodesActions
// }



