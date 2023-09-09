import { createSlice } from '@reduxjs/toolkit';
import { logOutUser, loginUser, refreshUser, registerUser } from './auth/operation';

const initialState = {
  userData: null,
  token:null,
  isLoading: false,
  authenticated: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
    extraReducers: (builder) => builder
    //   ---------------Register--------------------
    .addCase(registerUser.pending, handlePending)
    .addCase(registerUser.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
        state.authenticated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
    })
      .addCase(registerUser.rejected, handleRejected)
//   -----------------Login-------------------------
  .addCase(loginUser.pending, handlePending)
    .addCase(loginUser.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
        state.authenticated = true;
        state.userData = action.payload.user;
        state.token = action.payload.token;
    })
    .addCase(loginUser.rejected, handleRejected)
//   ====================LogOut===================
    .addCase(logOutUser.pending, handlePending)
    .addCase(logOutUser.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
        state.authenticated = false;
        state.userData = null;
        state.token = null;
    })
      .addCase(logOutUser.rejected, handleRejected)
      
    //   ====================Refresh===================
    .addCase(refreshUser.pending, handlePending)
    .addCase(refreshUser.fulfilled, (state, action) => {
    state.isLoading = false;
      state.error = null;
        state.authenticated = true;
        state.userData = action.payload;
        })
    .addCase(refreshUser.rejected, handleRejected)
},
)

export const authReducer = authSlice.reducer;