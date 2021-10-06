import { createSlice } from "@reduxjs/toolkit";

/*TODO:
    +data validation to all slice 
*/
const listPlaceSlice = createSlice({
  name: "listPlaceSlice",
  initialState: {
    list: [],
    loaded: false,
    filters: [],
    stage: "waiting",
  },
  reducers: {
    setIsLoaded(state, action) {
      const { payload } = action;

      if (typeof payload !== "boolean") return;

      state.loaded = payload;
    },
    setData(state, action) {
      const { payload } = action;

      state.data = payload;
      state.loaded = true;
      state.stage = "waiting";
    },
    addData(state, action) {
      const { payload } = action;
      state.data = [...state.data, ...payload];
      state.stage = "waiting";
    },
    setFilters(state, action) {
      const { payload } = action;
      state.filters = payload;
    },
    setStage(state, action) {
      const { payload } = action;
      state.stage = payload;
    },
  },
});

export const { setIsLoaded, setData, addData, setFilters, addFilter, setStage } =
  listPlaceSlice.actions;
export default listPlaceSlice.reducer;

// addFilter(state, action) {
//   const { payload } = action;
//   let filter = { isActive: false, index: null };

//   if (!state.filters.length) {
//     state.filters = [payload];
//     return;
//   }

//   state.filters.forEach((item, index) => {
//     if (item === payload) {
//       filter = { isActive: true, index };
//     }
//   });

//   if (filter.isActive) {
//     const filtersClone = [...state.filters];
//     filtersClone.splice(filter.index, 1);
//     state.filters = filtersClone;
//   } else {
//     state.filters = [...state.filters, payload];
//   }
// },
