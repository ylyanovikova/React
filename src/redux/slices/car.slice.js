import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services";

const initialState = {
    cars: [],
    carForUpdate: null
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
    async ({ car }) => {
        const { data } = await carService.create(car);
        return data
    }
);

const deleteById = createAsyncThunk(
    "carSlice/deleteById",
    async ({ id }) => {
        await carService.deleteById(id);
        return id
    }
);

const updateById = createAsyncThunk(
    "carSlice/updateById",
    async ({ id, car }, {dispatch}) => {
        const { data } = await carService.updateById(id, car);
        dispatch(update(data));
    }
);

const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        setCarForUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        update: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = { ...state.cars[index], ...action.payload };
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.cars = action.payload;
            })
            .addCase(createCar.fulfilled, (state, action) => {
                state.cars.push(action.payload);
            })
            .addCase(deleteById.fulfilled, (state, action) => {
                const id = action.payload;
                const index = state.cars.findIndex(car => car.id === id);
                state.cars.splice(index, 1);
            })
            // .addCase(updateById.fulfilled, (state, action) => {
            //     const car = state.cars.find(car => car.id === action.payload.id);
            //     const newCar = Object.assign(action.payload, car);
            // })
    }
});

const { reducer: carReducer, actions: { setCarForUpdate, update } } = carSlice;

const carActions = {
    getAll,
    createCar,
    deleteById,
    setCarForUpdate,
    updateById,
    update
};

export {
    carReducer,
    carActions
}