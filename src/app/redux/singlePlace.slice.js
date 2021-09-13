import { createSlice } from "@reduxjs/toolkit";

// initSlice???
const singlePlaceSlice = createSlice({
  name: "singlePlaceSlice",
  initialState: {
    id: null,
    loaded: false,
    data: null,
  },
  reducers: {
    setId(state, action) {
      const { payload } = action;

      if (typeof payload !== "number") return;

      state.id = payload;
    },
    setIsLoaded(state, action) {
      const { payload } = action;

      if (typeof payload !== "boolean") return;

      state.loaded = payload;
    },
    setData(state, action) {
      const { payload } = action;

      // if (!payload) return;
      // if (typeof payload !== "object") return;
      // if (
      //   !payload.hasOwnProperty("title") ||
      //   !payload.hasOwnProperty("longDescription") ||
      //   !payload.hasOwnProperty("pageLink") ||
      //   !payload.hasOwnProperty("images")
      // )
      //   return;

      // dokonczyc !!!
      /*
     {
         id,
         title,
         longDescription,
         pageLink,
         images:[],
         venue:{
             email,
             telephone,
             carParkAvailable,
             foodAndDrinkAvailable,
             disabledAccessAvailable
         },
         mainImage:{
             large or standard
         },
         address:{
             city,
             street,
             zipCode,
         }
         
     }
    */
      state.data = payload;
      state.loaded = true;
    },
  },
});

export const { setId, setIsLoaded, setData } = singlePlaceSlice.actions;
export default singlePlaceSlice.reducer;
