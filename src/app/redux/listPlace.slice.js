import { createSlice } from "@reduxjs/toolkit";

/*TODO:
    +data validation to all slice 
*/
const listPlaceSlice = createSlice({
  name: "listPlaceSlice",
  initialState: {
    list: [],
    loaded: false,
  },
  reducers: {
    // setId(state, action) {
    //   const { payload } = action;

    //   if (typeof payload !== "number") return;

    //   state.id = payload;
    // },
    setIsLoaded(state, action) {
      const { payload } = action;

      if (typeof payload !== "boolean") return;

      state.loaded = payload;
    },
    setData(state, action) {
      const { payload } = action;

      state.data = payload;
      state.loaded = true;
    },
    addData(state, action) {
      const { payload } = action;
      state.data = [...state.data, ...payload];
    },
  },
});

export const { setIsLoaded, setData, addData } = listPlaceSlice.actions;
export default listPlaceSlice.reducer;
