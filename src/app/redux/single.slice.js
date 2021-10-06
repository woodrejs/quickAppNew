import { createSlice } from "@reduxjs/toolkit";

const singleSlice = createSlice({
  name: "singleSlice",
  initialState: {
    offers: { id: null, loaded: false, data: null },
    places: { id: null, loaded: false, data: null },
  },
  reducers: {
    setId(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].id = payload[1];
    },
    setIsLoaded(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].loaded = payload[1];
    },
    setData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].data = payload[1];
      state[variant].loaded = true;
    },
  },
});

export const { setId, setIsLoaded, setData } = singleSlice.actions;
export default singleSlice.reducer;
