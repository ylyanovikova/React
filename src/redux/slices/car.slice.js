import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services/car.service";

const initialState = {
    cars: [],
    formError: {}
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async () => {
        const { data } = await carService.getAll();
        return data;
    }
);

const createCar = createAsyncThunk(
    "carSlice/createCar",
    async ({ car }, { rejectWithValue }) => {
        try {
            console.log(car);
            const {data} = await carService.create(car)
            return data;
        } catch (e) {
            return rejectWithValue({ formError: e.response.data });
        }
    }
);

const deleteCar = createAsyncThunk(
    "carSlice/deleteCar",
    async({carId})=>{
        const {data} = await carService.deleteById(carId);
        console.log(data);
        return data;
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload
        },
        [createCar.fulfilled]: (state, action) => {
            console.log(action);
            state.cars.push(action.payload);
        },
        [deleteCar.fulfilled]: (state, action)=>{
            const index = state.cars.findIndex(action.payload);
            state.cars.splice(index, 1);
        }
    }
});

const { reducer: carReducer } = carSlice;

export default carReducer;

export const carActions = {
    getAll,
    createCar,
    deleteCar
}