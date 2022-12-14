import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loading: false,
  userInfo: {}, // for user object
  userToken: null, // for storing the JWT
  error: null,
  success: false, // for monitoring the registration process.
}

const URL = 'http://localhost:8000/api/auth/login';

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginStart: (state,action) => {
      state.loading = true;
      // const handleLogin = async () => {
      //   try {
      //     const res = await axios.post(URL, {
      //       username: action.payload.username,
      //       password: action.payload.password,
      //     })
      //     const data = await res.data
      //     // dispatch(loginSuccess(data))
      //     state.userInfo =data
      //     if (data.username && data._id) {
      //       console.log("User ID ", data._id)
      //       router.push(`/user/${data._id}`)
      //     }

      //   } catch (err) {
      //     // dispatch(loginFailure(err))
      //     state.error = err
      //     console.log("Error", err)
      //   }
      // }
      // handleLogin()
      // console.log("Login started",action.payload)
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.userInfo = action.payload;
      console.log("Login Success", action.payload)
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userInfo = null;
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: {},
})

export const { loginStart, loginSuccess, loginFailure, logout } = userSlice.actions;
export default userSlice.reducer