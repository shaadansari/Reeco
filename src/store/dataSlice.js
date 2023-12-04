// dataSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://example.com/api/data';

// Fetch data asynchronously
export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

// Post data asynchronously
export const postData = createAsyncThunk('data/postData', async (newData) => {
  const response = await axios.post(apiUrl, newData);
  return response.data;
});

const dataSlice = createSlice({
  name: 'data',
  initialState: { items: [], status: 'idle', error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(postData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      });
  },
});

export default dataSlice.reducer;
