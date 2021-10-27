import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    jwt: null,
    logged: false,
    favorites: [],
    schedules: [],
    avatar: {
      url: null,
      public_id: null,
    },
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
      state.avatar = {
        url: null,
        public_id: null,
      };
    },
    setFavorites(state, action) {
      const { payload } = action;

      state.favorites = payload;
    },
    setSchedules(state, action) {
      const { payload } = action;

      state.schedules = payload;
    },
    setAvatar(state, action) {
      const { payload } = action;

      state.avatar = payload;
    },
  },
});

export const { setLoggedIn, setLoggedOut, setFavorites, setAvatar, setSchedules } =
  userSlice.actions;
export default userSlice.reducer;
