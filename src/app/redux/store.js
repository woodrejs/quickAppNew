import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home.slice";
import userSlice from "./user.slice";
import appSlice from "./app.slice";
import listSlice from "./list.slice";
import singleSlice from "./single.slice";

export default configureStore({
  reducer: {
    homeSlice: homeSlice,
    userSlice: userSlice,
    appSlice: appSlice,
    listSlice: listSlice,
    singleSlice: singleSlice,
  },
});
