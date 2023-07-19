import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    role: undefined,
    accessToken: undefined
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true
      state.accessToken = action.payload.accessToken
      state.role = action.payload.role
    },
    logout: state => {
      state.isLogin = false
      state.accessToken = undefined
      state.role = undefined
    }
  }
})

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions

export default authSlice.reducer