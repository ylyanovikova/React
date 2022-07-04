import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ICar } from "../../interfaces";
import { carService } from "../../services";

interface IState {
    cars: ICar[]
};

const initialState: IState = {
    cars: []
};

const getAll = createAsyncThunk<ICar[], void>(
    "carSlice/getAll",
    async () => {
        const { data } = await carService.getAll();
        return data;
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
    }
});

const { reducer: carReducer, actions } = carSlice;

const carActions = {
    getAll
}

export {
    carReducer,
    carActions
}