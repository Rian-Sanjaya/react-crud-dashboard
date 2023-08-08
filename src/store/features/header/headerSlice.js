import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    titleChanged: (state, action) => {
      state.title = action.payload
    }
  }
})

// selectors
export const getTitle = (state) => state.header.title

export const { titleChanged } = headerSlice.actions

export default headerSlice.reducer