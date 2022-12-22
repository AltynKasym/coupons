import { configureStore } from "@reduxjs/toolkit";
import map_api from "./slices/map_api";
import user from "./slices/user";
import favoriteSlice from "./slices/favoriteSlice";

const store = configureStore({
    reducer: {
        map_api,
        user,
        favoriteSlice
    },
    devTools: process.env.NODE_ENV !== 'production',
})
  
export default store;
export type RootState   = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;