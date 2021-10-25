import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    stage: "waiting",
    info: { message: null, isOpen: false, success: false },
    error: { message: null, isOpen: false, success: false },
  },
  reducers: {
    setError(state, action) {
      const message = action.payload;

      state.stage = "waiting";
      state.error.message = message;
      state.error.isOpen = true;
    },
    closeError(state, action) {
      state.error.message = null;
      state.error.isOpen = false;
    },
    setInfo(state, action) {
      const success = action.payload[0];
      const message = action.payload[1];

      state.stage = "waiting";
      state.info.message = message;
      state.info.isOpen = true;
      state.info.success = success;
    },
    closeInfo(state, action) {
      state.info.message = null;
      state.info.isOpen = false;
      state.info.success = false;
    },
    setStage(state, action) {
      state.stage = action.payload;
    },
  },
});

export const { setInfo, closeInfo, setError, closeError, setStage } = appSlice.actions;
export default appSlice.reducer;
