import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import ScreenTitleSection from "../../components/ScreenTitleSection";
import FilterSection from "../../components/FilterSection";
import VerticalCardList from "../../components/VerticalCardList";
import ListPaginationButton from "../../components/ListPaginationButton";
import LoadingSection from "../../components/LoadingSection";
//utils & styles
import { fetchItemList } from "../../utils/fetchFunctions";
import { setIsLoaded, setData, addData } from "../../redux/listOffer.slice";
import { useIsFocused } from "@react-navigation/native";

//todo: pozbyc sie img.standard na rzecz img
const EventList = ({ navigation }) => {
  const [paginationCounter, setPaginationCounter] = useState(0);
  const offerListData = useSelector(({ listOfferSlice }) => listOfferSlice.data);
  const offersFilters = useSelector(({ listOfferSlice }) => listOfferSlice.filters);
  const offerListDataLoaded = useSelector(({ listOfferSlice }) => listOfferSlice.loaded);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    async function init() {
      const data = await fetchItemList("offers", 0, offersFilters); //type, page, types, pageSize
      dispatch(setData(data));
    }

    isFocused ? init() : dispatch(setIsLoaded(false));
  }, [isFocused, offersFilters]);

  useEffect(() => {
    async function usePagination() {
      const data = await fetchItemList("offers", paginationCounter, offersFilters); //type, page, types, pageSize
      dispatch(addData(data));
    }
    paginationCounter > 0 && usePagination();
  }, [paginationCounter]);

  return offerListDataLoaded ? (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Zobacz najnowsze wydarzenia"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />

      <FilterSection variant="offers" filters={offersFilters} />

      <VerticalCardList list={offerListData} navigation={navigation} />

      <ListPaginationButton handler={handlePagination} />
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
});
