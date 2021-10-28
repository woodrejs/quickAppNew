import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userSlice",
  initialState: {
    jwt: null,
    logged: false,
    username: null,
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
      state.username = null;
      state.favorites = [];
      state.schedules = [];
      state.avatar = {
        url: null,
        public_id: null,
      };
    },
    setFavorites(state, action) {
      const { payload } = action;

      state.favorites = payload;
    },
    setUserName(state, action) {
      const { payload } = action;

      state.username = payload;
    },
    setSchedules(state, action) {
      const { payload } = action;

      state.schedules = payload;
    },
    setAvatar(state, action) {
      const { payload } = action;

      state.avatar = payload;
    },
    setUser(state, action) {
      const { user, jwt } = action.payload;
      const { avatar, favorites, schedules } = user;

      state.username = user.username;
      state.jwt = jwt;
      state.logged = true;

      if (avatar) {
        const { public_id, url } = avatar;

        state.avatar = { public_id, url };
      }

      if (favorites.length) {
        const formatedFavorites = favorites.map(({ uid, type, img, title }) => ({
          id: uid,
          type,
          img,
          title,
        }));
        state.favorites = formatedFavorites;
      }

      if (schedules.length) {
        const formatedSchedules = schedules.map(({ uid, date, title, _id, type }) => ({
          id: uid,
          date,
          title,
          _id,
          type,
        }));

        state.schedules = formatedSchedules;
      }
    },
  },
});

export const {
  setLoggedIn,
  setLoggedOut,
  setFavorites,
  setAvatar,
  setSchedules,
  setUserName,
  setUser,
} = userSlice.actions;
export default userSlice.reducer;
