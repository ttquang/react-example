import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogin: false,
    roles: [],
    accessToken: ""
  },
  reducers: {
    login: (state, action) => {
      state.isLogin = true
      state.accessToken = action.payload.accessToken
      state.roles = action.payload.roles
    },
    logout: state => {
      state.isLogin = false
      state.accessToken = undefined
      state.roles = []
    }
  }
})

// Action creators are generated for each case reducer function
export const {login, logout} = authSlice.actions

export default authSlice.reducer