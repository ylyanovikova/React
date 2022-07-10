import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../../services";

const initialState = {
    isAuth: null,
    loginError: false
};

const getTokens = createAsyncThunk(
    "authSlice/getTokens",
    async ({ user }) => {
        const { data } = await authService.login(user);
        return data
    }
);

const authSlice = createSlice({
    name: "authSlice",
    initialState,
    reducers: {
        logOut: (state) => {
            state.isAuth = false;
        },
        setAuth: (state) => {
            state.isAuth = true;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTokens.fulfilled, (state, action) => {
                state.isAuth = true;
                const { access, refresh } = action.payload;
                localStorage.setItem("access", access);
                localStorage.setItem("refresh", refresh);
            })
            .addCase(getTokens.rejected, (state) => {
                state.loginError = true;
            })
    }
});

const { reducer: authReducer, actions: { logOut, setAuth } } = authSlice;

const authActions = {
    getTokens,
    logOut,
    setAuth
}

export {
    authReducer,
    authActions
};

