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
    },
    addData(state, action) {
      const { payload } = action;
      state.data = [...state.data, ...payload];
    },
    setFilters(state, action) {
      const { payload } = action;
      state.filters = payload;
    },
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
  },
});

export const { setIsLoaded, setData, addData, setFilters, addFilter } =
  listPlaceSlice.actions;
export default listPlaceSlice.reducer;
