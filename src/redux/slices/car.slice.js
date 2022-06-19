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
            const {data} = await carService.createCar(car);
            console.log("try");
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
    extraReducers:{
        [getAll.fulfilled]: (state, action)=>{
            state.cars = action.payload
        },
        [createCar.fulfilled]: (state, action)=>{
            console.log(action);
            state.cars.push(action.payload)
        }
    }
});

const {reducer: carReducer} = carSlice;

export default carReducer;

export const carActions = {
    getAll,
    createCar
}