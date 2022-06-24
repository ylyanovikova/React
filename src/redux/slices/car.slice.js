import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { carService } from "../../services";

const initialState = {
    cars: [],
    formErrors: {},
    status: null,
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
    async ({ newCar }, { rejectWithValue }) => {
        try {
            const { data } = await carService.create(newCar);
            return data
        } catch (e) {
            return rejectWithValue({ formErrors: e.response.data, status: e.message })
        }
    }
);

const deleteCar = createAsyncThunk(
    "carSlice/deleteCar",
    async ({ carId }, { dispatch }) => {
        await carService.deleteById(carId);
        dispatch(deleteCarById({ carId }));
    }
);

const updateCar = createAsyncThunk(
    "carSlice/updateCar",
    async ({ id, car }, { dispatch }) => {
        await carService.updateById(id, car);
        dispatch(update({ id, car }));
    }
)



const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {
        deleteCarById: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.carId);
            state.cars.splice(index, 1);
            console.log(action.payload.carId);
        },
        setCarFotUpdate: (state, action) => {
            state.carForUpdate = action.payload;
        },
        update: (state, action) => {
            const index = state.cars.findIndex(car => car.id === action.payload.id);
            state.cars[index] = { ...state.cars[index], ...action.payload.car };
        }

    },
    extraReducers: {
        [getAll.fulfilled]: (state, action) => {
            state.cars = action.payload;
        },
        [createCar.fulfilled]: (state, action) => {
            state.cars.push(action.payload);
        },
        [createCar.rejected]: (state, action) => {
            state.formErrors = action.payload.formErrors;
            state.status = action.payload.status;
        }
    }
});

const { reducer: carReducer, actions: { deleteCarById, setCarFotUpdate, update } } = carSlice;

export default carReducer;


export const carActions = {
    getAll,
    createCar,
    deleteCar,
    updateCar,

    setCarFotUpdate,
    update
};
