import { createSlice } from "@reduxjs/toolkit";


const singleOfferSlice = createSlice({
  name: "singleOfferSlice",
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

export const { setId, setIsLoaded, setData } = singleOfferSlice.actions;
export default singleOfferSlice.reducer;
