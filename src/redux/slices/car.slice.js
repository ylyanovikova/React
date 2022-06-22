import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services/car.service";

const initialState = {
    cars: [],
    formErrors: {},
    carForUpdate: '',
    updatedCar: null
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
);

const carForUpdate = createAsyncThunk(
    "carSlice/carForUpdate",
    async ({ carForUpdate }) => {
        return carForUpdate;
    }
);

const updateCar = createAsyncThunk(
    "carSlice/updateCar",
    async ({ car, carForUpdate }) => {
        
        const { data } = await carService.updateById(carForUpdate.id, car);
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
            state.cars.push(action.payload);
            state.formErrors = {}
        },
        [createCar.rejected]: (state, action) => {
            state.formErrors = action.payload.formError;
        },
        [deleteCar.fulfilled]: (state, action) => {
            const carId = action.payload;
            const newCars = state.cars.filter((car) => car.id !== carId);
            state.cars = newCars;
        },
        [carForUpdate.fulfilled]: (state, action) => {
            state.carForUpdate = action.payload;
        },
        [updateCar.fulfilled]: (state, action) => {
            const car = state.cars.find(car => car.id === action.payload.id);
            const newCar = Object.assign(action.payload, car);
            state.updatedCar = newCar;
        }
    }
});

const { reducer: carReducer } = carSlice;

export default carReducer;

export const carActions = {
    getAll,
    createCar,
    deleteCar,
    carForUpdate,
    updateCar
}