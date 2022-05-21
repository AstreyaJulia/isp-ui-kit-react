import {createSlice} from "@reduxjs/toolkit";

/** Начальное состояние пользователя
 * @returns {any}
 */
const initialUser = () => {
    const item = window.localStorage.getItem("authUser");
    /** Парсинг сохраненного json или возвратить initialValue */
    return item ? JSON.parse(item) : {};
}

export const authSlice = createSlice({
    name: "authentication",
    initialState: {
        authUser: initialUser()
    },
    reducers: {
        handleLogin: (state, action) => {
            state.authUser = action.payload;
            state["jwt"] = action.payload["jwt"];
            localStorage.setItem("authUser", JSON.stringify(action.payload));
            localStorage.setItem("jwt", JSON.stringify(action.payload.jwt));
        },
        handleLogout: state => {
            state.authUser = {};
            state["jwt"] = null;
            /** Удалить пользователя, токен из localStorage */
            localStorage.removeItem("authUser");
            localStorage.removeItem("jwt");
        }
    }
})

export const {handleLogin, handleLogout} = authSlice.actions;

export default authSlice.reducer
