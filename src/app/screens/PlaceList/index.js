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
import { setIsLoaded, setData, addData } from "../../redux/listPlace.slice";
import { useIsFocused } from "@react-navigation/native";

const PlaceList = ({ navigation }) => {
  const [paginationCounter, setPaginationCounter] = useState(0);
  const placeListData = useSelector(({ listPlaceSlice }) => listPlaceSlice.data);
  const placesFilters = useSelector(({ listPlaceSlice }) => listPlaceSlice.filters);
  const placeListDataLoaded = useSelector(({ listPlaceSlice }) => listPlaceSlice.loaded);

  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    async function init() {
      const data = await fetchItemList("places", 0, placesFilters); //type, page, types, pageSize
      dispatch(setData(data));
    }

    isFocused ? init() : dispatch(setIsLoaded(false));
  }, [isFocused, placesFilters]);

  useEffect(() => {
    async function usePagination() {
      const data = await fetchItemList("places", paginationCounter, placesFilters); //type, page, types, pageSize
      dispatch(addData(data));
    }
    paginationCounter > 0 && usePagination();
  }, [paginationCounter]);

  return placeListDataLoaded ? (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title="Odkryj najciekawsze miejsca"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      />
      <FilterSection variant="places" filters={placesFilters} />
      <VerticalCardList list={placeListData} navigation={navigation} />
      <ListPaginationButton handler={handlePagination} />
    </ScrollView>
  ) : (
    <LoadingSection />
  );
};
export default PlaceList;

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
  },
});
