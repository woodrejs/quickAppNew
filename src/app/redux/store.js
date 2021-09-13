import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home.slice";

export default configureStore({
  reducer: {
    homeSlice: homeSlice,
  },
});
