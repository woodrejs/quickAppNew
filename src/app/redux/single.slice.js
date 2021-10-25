import { createSlice } from "@reduxjs/toolkit";

const singleSlice = createSlice({
  name: "singleSlice",
  initialState: {
    offers: { id: null, data: null },
    places: { id: null, data: null },
  },
  reducers: {
    setId(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].id = payload[1];
    },
    setData(state, action) {
      const { payload } = action;
      const variant = payload[0];

      state[variant].data = payload[1];
    },
  },
});

export const { setId, setData } = singleSlice.actions;
export default singleSlice.reducer;
