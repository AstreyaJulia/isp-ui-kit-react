import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {fetch, setAuthorization} from "../utils/Helpers/api_helper";

if (localStorage.getItem("jwt")) {
    setAuthorization(localStorage.getItem("jwt").replace(/['"]+/g, '').toString())
}

export const fetchUserData = createAsyncThunk("userData/fetchUserData", async calendars => {
    const response = await fetch.get("api/v1/sidebar", "");
    return response;
});

/** Меню узкое или широкое
 * @returns {any|boolean}
 */
const initialMenuCollapsed = () => {
    const item = window.localStorage.getItem("menuCollapsed")
    /** Парсинг сохраненного json, если его нет, возвращает initialValue */
    return item ? JSON.parse(item) : false
}

/** Тема
 * @returns {any|string}
 */
const initialSkin = () => {
    const item = window.localStorage.getItem("skin");
    /** Парсинг сохраненного json, если его нет, возвращает initialValue */
    return item ? JSON.parse(item) : "light";
}

export const userDataSlice = createSlice({
    name: "userdata",
    initialState: {
        loggedUser: {},
        sidebarMenu: [],
        userSettings: {}
    },
})