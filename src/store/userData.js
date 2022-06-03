import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetch, setAuthorization} from "../utils/Helpers/api_helper";

if (localStorage.getItem("jwt")) {
    setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
}

export const fetchUserData = createAsyncThunk("userData/fetchUserData", async (data, {rejectWithValue}) => {
    try {
        const response = await fetch.get("users/login-data");
        return await response.data
    } catch (err) {
        if (!err.response) {
            throw err
        }
        return rejectWithValue(err.response.data)
    }
});

export const userDataSlice = createSlice({
    name: "userdata",
    initialState: {
        userData: fetchUserData(),
    },
    extraReducers: builder => {
        builder
            .addCase(fetchUserData.fulfilled, (state, action) => {
                state.userData = action.payload;
            })
            .addCase(fetchUserData.rejected, (state, action) => {
                if (action.error.message.toString() === "Request failed with status code 401") {
                    state.authUser = {};
                    state["jwt"] = null;
                    /** Удалить пользователя, токен из localStorage */
                    localStorage.removeItem("authUser");
                    localStorage.removeItem("jwt");
                }
            })
    }
})

export default userDataSlice.reducer;