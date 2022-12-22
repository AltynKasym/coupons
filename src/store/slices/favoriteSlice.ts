import {createSlice} from "@reduxjs/toolkit";

interface favoriteState {
  favoriteList: any
}

const initialState = { favoriteList: [] } as favoriteState

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    syncAllFavorites: (state) => {
      if(localStorage.getItem('favorites') == null) {
        localStorage.setItem('favorites', JSON.stringify([]))
      } else {
        // @ts-ignore
        state.favoriteList = JSON.parse(localStorage.getItem('favorites'))
      }
    },
    addToFavorites: (state, action) => {
        state.favoriteList.push(action.payload)
      // @ts-ignore
        localStorage.setItem('favorites', JSON.stringify(state.favoriteList))
    },
    removeFromFavorites: (state, action) => {
      state.favoriteList = state.favoriteList.filter((item: any) => action.payload !== item.id)
      localStorage.setItem('favorites', JSON.stringify(state.favoriteList))
    }
  }
})

export const {addToFavorites, removeFromFavorites, syncAllFavorites} = favoriteSlice.actions

export default favoriteSlice.reducer