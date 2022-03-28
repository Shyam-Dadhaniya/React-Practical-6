import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUser = createAsyncThunk("user/getUser", async (page) => {
  return fetch(`https://reqres.in/api/users?page=${page}`).then((response) =>
    response.json()
  );
});

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: [],
    status: null,
    currentPage: 1,
    totalPage: null,
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.status = "pending";
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.user = payload.data;
      state.status = "success";
      state.totalPage = payload.total_pages;
      state.currentPage = payload.page;
    },
    [getUser.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default userSlice.reducer;
