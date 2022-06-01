import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetch, setAuthorization} from "../utils/Helpers/api_helper";
import axios from "axios";

if (localStorage.getItem("jwt")) {
    setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
}

export const fetchUserData = createAsyncThunk("userData/fetchUserData", async () => {
    const response = await axios.get("users/login-data");
    return response.data;
});

const initialUser = async () => {
    const response = await axios.get("users/login-data");
    return response.data;
}

export const userDataSlice = createSlice({
    name: "userdata",
    initialState: {
        userData: {}
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
            })
    }
})

export default userDataSlice.reducer;