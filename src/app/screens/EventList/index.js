import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector, useDispatch } from "react-redux";
//components
import ScreenTitleSection from "../../components/ScreenTitleSection";
import SortButtonsSection from "../../components/SortButtonsSection";
import VerticalCardList from "../../components/VerticalCardList";
import ListPaginationButton from "../../components/ListPaginationButton";
import LoadingSection from "../../components/LoadingSection";
//utils & styles
import {  fetchItemList } from "../../utils/fetchFunctions";
import { setIsLoaded, setData, addData } from "../../redux/listOffer.slice";

const EventList = ({ navigation }) => {
  const [paginationCounter, setPaginationCounter] = useState(1);
  const offerListData = useSelector(({ listOfferSlice }) => listOfferSlice.data);
  const offerListDataLoaded = useSelector(({ listOfferSlice }) => listOfferSlice.loaded);

  const dispatch = useDispatch();
  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    async function init() {
      const data = await fetchItemList("offers"); //type, page, types, pageSize
      dispatch(setData(data));
    }

    init();

    return () => dispatch(setIsLoaded(false));
  }, []);

  useEffect(() => {
    async function usePagination() {
      const data = await fetchItemList("offers", paginationCounter); //type, page, types, pageSize
      dispatch(addData(data));
    }
    paginationCounter > 1 && usePagination();
  }, [paginationCounter]);

  return offerListDataLoaded ? (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Zobacz najnowsze wydarzenia"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <SortButtonsSection />
      <VerticalCardList data={offerListData} navigation={navigation} type="event" />
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
