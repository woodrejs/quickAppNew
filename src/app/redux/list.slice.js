import { createSlice } from "@reduxjs/toolkit";

const listSlice = createSlice({
  name: "listSlice",
  initialState: {
    offers: { stage: "waiting", list: [], filters: [], loaded: false },
    places: { stage: "waiting", list: [], filters: [], loaded: false },
  },
  reducers: {
    setIsLoaded(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].loaded = payload[1];
    },
    setData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].list = payload[1];
      state[variant].loaded = true;
      state[variant].stage = "waiting";
    },
    addData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].list = [...state[variant].list, ...payload[1]];
      state[variant].stage = "waiting";
    },
    setFilters(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].filters = payload[1];
    },
    setStage(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].stage = payload[1];
    },
  },
});

export const { setIsLoaded, setData, addData, setFilters, addFilter, setStage } =
  listSlice.actions;
export default listSlice.reducer;
