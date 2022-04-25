import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: JSON.parse(localStorage.getItem("userInfo")),
  register: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.userInfo = action.payload
    },
    register: (state, action) => {
      state.register = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, register } = authSlice.actions

export default authSlice.reducer