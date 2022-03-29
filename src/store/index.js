import { configureStore } from "@reduxjs/toolkit";
import userCardSlice from "./userCardSlice";
import userSlice from "./userSlice";

const store = configureStore({
  reducer: { card: userCardSlice, user: userSlice },
});
export default store;
