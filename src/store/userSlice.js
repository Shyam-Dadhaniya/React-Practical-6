import { createSlice } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    user: [],
    status: null,
    currentPage: 1,
    perPage: 2,
    totalPage: null,
  },
  extraReducers: userReducer,
});

export default userSlice.reducer;
