import { http } from "@/utils/helper/http.helper";
import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const getUser = Cookies.get('user') || '';
const getAccessToken = Cookies.get('token') || '';

const initialState = {
  isAuthenticated: Cookies.get('token') ? true : false,
  user: getUser ? JSON.parse(getUser) : null,
  token: getAccessToken ? JSON.parse(getAccessToken) : null,
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isAuthenticated = true
      state.token = action.payload
      http.defaults.headers.common['Authorization'] = 'Bearer ' + action.payload.access_token;
      Cookies.set('token', JSON.stringify(action.payload));
    },
    updateUser(state, action) {
      state.user = action.payload
      Cookies.set('user', JSON.stringify(action.payload));
    },
    logout(state) {
      state.isAuthenticated = false
      state.user = null
      state.token = null
      http.defaults.headers.common['Authorization'] = '';

      Cookies.remove('token');
      Cookies.remove('user');
    },
  },
})

export const { login, logout, updateUser } = authSlice.actions

export default authSlice.reducer
