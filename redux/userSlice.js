import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart : (state) => {
      state.loading = true; 
    },
    loginSuccess : (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
    },
    loginFailure : (state) => {
      state.loading = false;
      state.error = true;
    },
    logout : (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {},
})

export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions;
export default userSlice.reducer