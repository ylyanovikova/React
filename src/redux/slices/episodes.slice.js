import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { episodesService } from '../../services/episodes.service';

const initialState = {
    pages: null,
    prev: null,
    next: null,
    episodes: [],
    currentEpisode: null,
    currentSeason: null
};

const getAll = createAsyncThunk(
    "episodesSlice/getAll",
    async ({ page }) => {
        const { data } = await episodesService.getAll(page);
        return data;
    }
);

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {
        currentEpisodeAndSeason: (state, action) => {
            const { episode, season } = action.payload;
            state.currentEpisode = episode;
            state.currentSeason = season;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                const { info: { pages, prev, next }, results } = action.payload;
                state.pages = pages;
                state.prev = prev;
                state.next = next;
                state.episodes = results;
            })
    }

});

const { reducer: episodesReducer, actions: { currentEpisodeAndSeason } } = episodesSlice;

export { episodesReducer };

export const episodesActions = {
    getAll,
    currentEpisodeAndSeason
};
