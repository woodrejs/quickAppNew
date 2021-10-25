import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    offers: { list: [], filters: [] },
    places: { list: [], filters: [] },
    recommended: { list: [], filters: [] },
    search: { list: [], filters: [] },
  },
  reducers: {
    setData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].list = payload[1];
    },
    addData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].list = [...state[variant].list, ...payload[1]];
    },
    setFilters(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].filters = payload[1];
    },
  },
});

export const { setData, addData, setFilters } = listSlice.actions;
export default listSlice.reducer;
