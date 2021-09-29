import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    jwt: null,
    logged: false,
    favorites: [],
  },
  reducers: {
    setLoggedIn(state, action) {
      const { payload } = action;

      state.logged = true;
      state.jwt = payload;
    },
    setLoggedOut(state) {
      state.logged = false;
      state.jwt = null;
      state.favorites = [];
    },
  },
});

export const { setLoggedIn, setLoggedOut } = userSlice.actions;
export default userSlice.reducer;
