import { createSlice } from "@reduxjs/toolkit";
import { localStorageKeys } from "../../data/consts";
import { IUser } from "../../types/app.interface";

interface IStateUser {
    user: IUser | null
}

const localUser = JSON.parse(localStorage.getItem(localStorageKeys.currentUserToken) || 'null');

const initialState:IStateUser = {
    user: localUser || null
}

console.log(localUser);


const user = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser(state, action){
            state.user = action.payload
        }
    }
})

export const {saveUser} = user.actions;
export default user.reducer;