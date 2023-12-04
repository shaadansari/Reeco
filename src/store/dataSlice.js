import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const apiUrl = "http://localhost:8000/orderData";
// const apiUrl = "https://reecassingment.netlify.app/orderData";


export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await axios.get(apiUrl);
  return response.data;
});

export const postData = createAsyncThunk(
  "data/postData",
  async ({ endPoint, body }, { dispatch }) => {
    const response = await axios.put(`${apiUrl}/${endPoint}`, body);
    dispatch(fetchData());
    return response.data;
  }
);

const dataSlice = createSlice({
  name: "data",
  initialState: { items: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(postData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(postData.fulfilled, (state) => {
        state.status = "succeeded";
      });
  },
});

export default dataSlice.reducer;
