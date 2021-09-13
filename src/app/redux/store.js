import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home.slice";
import singlePlaceSlice from "./singlePlace.slice";
import singleOfferSlice from "./singleOffer.slice";

export default configureStore({
  reducer: {
    homeSlice: homeSlice,
    singlePlaceSlice: singlePlaceSlice,
    singleOfferSlice: singleOfferSlice,
  },
});
