import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user.slice";
import appSlice from "./app.slice";
import listSlice from "./list.slice";
import singleSlice from "./single.slice";

export default configureStore({
  reducer: {

    userSlice: userSlice,
    appSlice: appSlice,
    listSlice: listSlice,
    singleSlice: singleSlice,
  },
});
