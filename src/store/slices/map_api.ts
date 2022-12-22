import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const API_KEY = import.meta.env.VITE_REACT_APP_MAP_API_KALNUR;

interface Todo {
    api: string
}

const initialState: Todo = {
   api: API_KEY,
}

const map_api = createSlice({
    name: 'map_api',
    initialState,
    reducers: {
    },
});

export default map_api.reducer;