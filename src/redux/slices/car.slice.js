import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services/car.service";

const initialState = {
    cars: []
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async () => {
        const { data } = await carService.getAll();
        return data;
    }
);

const create = createAsyncThunk(
    "create/getAll",
    async ({car})=>{
        const {data} =await  carService.create(car);
        return data;
    }
)
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers: {
        [getAll.fulfilled]: (state, action)=>{
            state.cars = action.payload;
        },
        [create.fulfilled]: (state, action) => {
            state.cars.push(action.payload);
        }
    }
});

const { reducer: carReducer, actions} = carSlice;

export default carReducer;

export const carActions ={
    getAll,
    create
}