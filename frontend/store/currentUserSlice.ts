import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import client from '../services/api';

const initialState = {
  user: null,
  isAuthenticated: false,
  status: 'idle',
  error: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase('currentUser/load/fulfiled', (state, action: any) => {
      state.status = 'succeeded';
      state.user = action.payload;
      state.isAuthenticated = true;
    });
  },
});

const loadUser = createAsyncThunk('currentUser/load', async () => {
  const user = await client.get('/user/me');
  return user.data;
});

export default currentUserSlice.reducer;
