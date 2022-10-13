import { createSlice } from '@reduxjs/toolkit';


export const authSlice = createSlice({
  name: 'auth',
  initialState: { user: {}, token: null },
  reducers: {
    setUserLogin: (state, action) => {
      state.user = action.payload
    },
    logOut: (state, action) => {
      state.user = null
      state.token = null
    }
  },
});

export const { setUserLogin, logOut } = authSlice.actions;
export default authSlice.reducer
export const { selectCurrentUser } = (state) => state.auth.user;


