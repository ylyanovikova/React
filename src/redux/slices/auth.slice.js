import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../../services";

const initialState = {
    isAuth: null,
    loginError: false,
    errorMessage: false,
    authName: null
};

const getTokens = createAsyncThunk(
    "authSlice/getTokens",
    async ({ user }, { dispatch, rejectWithValue }) => {
        try {
            const { data } = await authService.login(user);
            dispatch(logIn({ data, user }));
        } catch (e) {
            return rejectWithValue({ status: e.message })
        }
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
        },
        logIn: (state, action) => {
            const { access, refresh } = action.payload.data;
            localStorage.setItem("access", access);
            localStorage.setItem("refresh", refresh);
            state.isAuth = true;
            state.errorMessage = false;
            state.authName = action.payload.user.username;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getTokens.rejected, (state, action) => {
                state.loginError = true;
                state.errorMessage = action.payload.status;
            })
    }
});

const { reducer: authReducer, actions: { logOut, setAuth, logIn } } = authSlice;

const authActions = {
    getTokens,
    logOut,
    setAuth,
    logIn
}

export {
    authReducer,
    authActions
};

