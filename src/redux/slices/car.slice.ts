import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ICar } from "../../interfaces";
import { carService } from "../../services";

interface IState {
    cars: ICar[],
    carForUpdate: ICar | null
};

const initialState: IState = {
    cars: [],
    carForUpdate: null
};

const getAll = createAsyncThunk<ICar[], void>(
    "carSlice/getAll",
    async () => {
        const { data } = await carService.getAll();
        return data;
    }
);

const createCar = createAsyncThunk<ICar, { car: ICar }>(
    "carSlice/createCar",
    async ({ car }) => {
        const { data } = await carService.create(car);
        return data;
    }
);

const deleteById = createAsyncThunk<{ id: string }, { id: string }>(
    "carSlice/deleteById",
    async ({ id }) => {
        await carService.deleteById(id);
        return { id }
    }
)

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        // setCarForUpdate: (state, action)=>{
        //     state.carForUpdate = action.payload
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload)
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const { id } = action.payload;
                const newCars = state.cars.filter((car) => car.id?.toString() !== id);
                state.cars = newCars;
            })
    }
});

const { reducer: carReducer, actions: setCarForUpdate } = carSlice;

const carActions = {
    getAll,
    createCar,
    deleteById,
    setCarForUpdate
}

export {
    carReducer,
    carActions
}