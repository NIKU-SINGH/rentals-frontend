import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  data: {},
  error: null,
  success: false,
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    searchStart: (state,action) => {
      state.loading = true;
    },
    searchSuccess: (state, action) => {
      state.loading = false;
      
      state.data = action.payload;
      console.log("search Successfull", action.payload)
    },
    searchFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
  extraReducers: {},
})

export const { searchStart, searchSuccess, searchFailure } = searchSlice.actions;
export default searchSlice.reducer