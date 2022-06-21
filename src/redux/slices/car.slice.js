import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services/car.service";

const initialState = {
    cars: [],
    formError: {},
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
            const { data } = await carService.create(car)
            return data;
        } catch (e) {
            return rejectWithValue({ formError: e.response.data });
        }
    }
);

const deleteCar = createAsyncThunk(
    "carSlice/deleteCar",
    async ({ carId }) => {
        await carService.deleteById(carId);
        return carId;
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
        [deleteCar.fulfilled]: (state, action) => {
            const carId = action.payload;
            const newCars = state.cars.filter((car) => car.id !== carId);
            state.cars = newCars;
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