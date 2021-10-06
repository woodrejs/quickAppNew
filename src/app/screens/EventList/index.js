import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import ScreenTitleSection from "../../components/ScreenTitleSection";
import FilterSection from "../../components/FilterSection";
import VerticalCardList from "../../components/VerticalCardList";
import LoadingSection from "../../components/LoadingSection";
import IconButton from "../../components/IconButton";
//utils & styles
import { fetchItemList } from "../../utils/fetchFunctions";
import { setIsLoaded, setData, addData, setStage } from "../../redux/listOffer.slice";
import { useIsFocused } from "@react-navigation/native";
import { setError } from "../../redux/app.slice";

//todo: pozbyc sie img.standard na rzecz img
const EventList = ({ navigation }) => {
  const [paginationCounter, setPaginationCounter] = useState(0);
  const offerListData = useSelector(({ listOfferSlice }) => listOfferSlice.data);
  const offersFilters = useSelector(({ listOfferSlice }) => listOfferSlice.filters);
  const offerListDataLoaded = useSelector(({ listOfferSlice }) => listOfferSlice.loaded);
  const stage = useSelector(({ listOfferSlice }) => listOfferSlice.stage);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    async function init() {
      try {
        const data = await fetchItemList("offers", 0, offersFilters);
        dispatch(setData(data));
      } catch (error) {
        dispatch(setError([true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie."]));
      }
    }
    dispatch(setStage("pending"));
    setPaginationCounter(0);
    isFocused ? init() : dispatch(setIsLoaded(false));
  }, [isFocused, offersFilters]);

  useEffect(() => {
    async function usePagination() {
      try {
        const data = await fetchItemList("offers", paginationCounter, offersFilters); //type, page, types, pageSize
        dispatch(addData(data));
      } catch (error) {
        dispatch(setError([true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie."]));
      }
    }
    dispatch(setStage("pending"));
    paginationCounter > 0 && usePagination();
  }, [paginationCounter]);

  console.log({ stage });

  return offerListDataLoaded ? (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Zobacz najnowsze wydarzenia"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <FilterSection variant="offers" filters={offersFilters} />

      <VerticalCardList list={offerListData} navigation={navigation} />

      <IconButton
        handler={handlePagination}
        variant="plus"
        customStyle={style.paginationButton}
        stage={stage}
      />
    </ScrollView>
  ) : (
    <LoadingSection />
  );
};
export default EventList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
  paginationButton: {
    marginBottom: 20,
    marginTop: -10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
