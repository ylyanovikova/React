import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { carService } from "../../services/car.service";

const initialState = {
    cars: [],
    formError: {}
};

const getAll = createAsyncThunk(
    "carSlice/getAll",
    async ()=>{
        const {data} = await carService.getAll();
        return data;
    }
);

const createCar = createAsyncThunk(
    "carSlice/createCar",
    async ({car}, { rejectWithValue})=>{
        try{
            console.log(car);
            const {data} = await carService.createCar(car);
            return data;
        } catch(e){
            return rejectWithValue({formError: e.response.data});
        }
    }

)
const carSlice = createSlice({
    name: "carSlice",
    initialState,
    reducers: {},
    extraReducers:(builder)=> {
        builder
        .addCase(getAll.fulfilled, (state, action)=>{
            state.cars = action.payload
        })
        .addCase(createCar.fulfilled, (state, action)=>{
            console.log("action.payload");
            state.cars.push(action.payload)
        })
    }
});

const {reducer: carReducer, actions} = carSlice;

export default carReducer;

export const carActions = {
    getAll,
    createCar
}