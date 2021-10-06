import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    info: { stage: "waiting", message: null, isOpen: false },
    error: { message: null, isOpen: false },
  },
  reducers: {
    setError(state, action) {
      const isOpen = action.payload[0];
      const message = action.payload[1];

      state.error.message = message;
      state.error.isOpen = isOpen;
    },
    setInfo(state, action) {
      const message = action.payload[1] ?? null;
      const stage = action.payload[0];

      state.info.stage = stage;

      switch (stage) {
        case "waiting":
          state.info.message = null;
          state.info.isOpen = false;
          break;
        case "pending":
          state.info.isOpen = true;
          break;
        default:
          state.info.isOpen = true;
          state.info.message = message;
          break;
      }
    },
  },
});

export const { setInfo, setError } = appSlice.actions;
export default appSlice.reducer;
