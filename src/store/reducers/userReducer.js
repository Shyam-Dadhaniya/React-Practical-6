import { createAsyncThunk } from "@reduxjs/toolkit";
import { config } from "../../config/env.config";

export const getUser = createAsyncThunk(
  "user/getUser",
  async ({ page, perPage }) => {
    return fetch(
      `${config.API_URL}/users?page=${page}&per_page=${perPage}`
    ).then((response) => {
      return response.json();
    });
  }
);

export const userReducer = {
  [getUser.pending]: (state) => {
    state.status = "pending";
  },
  [getUser.fulfilled]: (state, { payload }) => {
    state.user = payload.data;
    state.status = "success";
    state.totalPage = payload.total_pages;
    state.perPage = payload.per_page;
    state.currentPage = payload.page;
  },
  [getUser.rejected]: (state) => {
    state.status = "rejected";
  },
};
