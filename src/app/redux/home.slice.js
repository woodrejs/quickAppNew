import { createSlice } from "@reduxjs/toolkit";

// initSlice???
const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    lists: {},
    // stage: "pending",
  },
  reducers: {
    setList(state, action) {
      const { payload } = action;

      state.lists = payload;
      // state.stage = "success";
    },
    // setStage(state, action) {
    //   const { payload } = action;

    //   state.stage = payload;
    // },
  },
});

export const { setList } = homeSlice.actions;
// export const {  setList, setStage } = homeSlice.actions;
export default homeSlice.reducer;
