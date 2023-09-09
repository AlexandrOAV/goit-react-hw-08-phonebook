import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

export const token = {
  set: newToken => {
    instance.defaults.headers.Authorization = newToken;
  },
  clear: () => {
    instance.defaults.headers.Authorization = '';
  },
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post(`users/signup`, formData);
      token.set(data.token); 
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (formData, thunkApi) => {
    try {
      const { data } = await instance.post(`users/login`, formData);
      token.set(data.token); 
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const logOutUser = createAsyncThunk(
  'auth/logOutUser',
  async thunkApi => {
    try {
        await instance.post(`users/logout`);
        token.clear();
    return ;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, thunkApi) => {
    try {
      const state = thunkApi.getState();
      const userToken = state.auth.token;
      token.set(userToken);
      const { data } = await instance.get(`users/current`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  },
);


