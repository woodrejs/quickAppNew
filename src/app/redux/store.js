import { configureStore } from "@reduxjs/toolkit";
import homeSlice from "./home.slice";
import singlePlaceSlice from "./singlePlace.slice";
import singleOfferSlice from "./singleOffer.slice";
import listPlaceSlice from "./listPlace.slice";
import listOfferSlice from "./listOffer.slice";
import userSlice from "./user.slice";

export default configureStore({
  reducer: {
    homeSlice: homeSlice,
    singlePlaceSlice: singlePlaceSlice,
    singleOfferSlice: singleOfferSlice,
    listPlaceSlice: listPlaceSlice,
    listOfferSlice: listOfferSlice,
    userSlice: userSlice,
  },
});
