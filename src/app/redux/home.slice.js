import { createSlice } from "@reduxjs/toolkit";

// initSlice???
const homeSlice = createSlice({
  name: "homeSlice",
  initialState: {
    movies: {
      list: [],
      loaded: false,
    },
    plays: {
      list: [],
      loaded: false,
    },
    books: {
      list: [],
      loaded: false,
    },
    sport: {
      list: [],
      loaded: false,
    },
    places: {
      list: [],
      loaded: false,
    },
    main: {
      list: [],
      loaded: false,
    },
  },
  reducers: {
    //action:{name,value}
    setList(state, action) {
      const name = action.payload[0];
      const value = action.payload[1];

      if (typeof value !== "object") return;
      // if (name !== "movies" && name !== "places" && name !== "plays") return;

      state[name].list = value;
      state[name].loaded = true;
    },
    //action:{name,value}
    setListLoaded(state, action) {
      const name = action.payload[0];
      const value = action.payload[1];

      if (typeof value !== "boolean") return;
      // if (name !== "movies" && name !== "places" && name !== "plays") return;

      state[name].loaded = true;
    },
  },
});

export const { setListLoaded, setList } = homeSlice.actions;
export default homeSlice.reducer;
