import { createSlice } from "@reduxjs/toolkit";
const UserCardSlice = createSlice({
    name: "userCard",
    initialState: {
      user: null,
    },
    reducers: {
      setUser(state, action) {
        state.user = action.payload;
      },
      removeUser(state) {
        state.user = null;
      },
    },
  });
  
  export const cardActions = UserCardSlice.actions;

  export default UserCardSlice.reducer