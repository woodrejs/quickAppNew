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
import { setIsLoaded, setData, addData, setStage } from "../../redux/list.slice";
import { fetchItemList } from "../../utils/fetchFunctions";
import { useIsFocused } from "@react-navigation/native";
import { setError } from "../../redux/app.slice";

//todo: pozbyc sie img.standard na rzecz img
const List = ({ navigation, variant }) => {
  const [paginationCounter, setPaginationCounter] = useState(0);

  const { list, filters, loaded, stage } = useSelector(
    ({ listSlice }) => listSlice[variant]
  );

  const isFocused = useIsFocused();
  const dispatch = useDispatch();

  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    async function init() {
      try {
        const data = await fetchItemList(variant, 0, filters);
        dispatch(setData([variant, data]));
      } catch (error) {
        dispatch(setError([true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie."]));
      }
    }
    dispatch(setStage([variant, "pending"]));
    setPaginationCounter(0);
    isFocused ? init() : dispatch(setIsLoaded([variant, false]));
  }, [isFocused, filters]);

  useEffect(() => {
    async function usePagination() {
      try {
        const data = await fetchItemList(variant, paginationCounter, filters); //type, page, types, pageSize
        dispatch(addData([variant, data]));
      } catch (error) {
        dispatch(setError([true, "Błąd podczas ładowania aplikacji. Spróbuj ponownie."]));
      }
    }
    dispatch(setStage([variant, "pending"]));
    paginationCounter > 0 && usePagination();
  }, [paginationCounter]);

  return loaded ? (
    <ScrollView style={style.container}>
      <ScreenTitleSection
        title={`Zobacz najnowsze ${variant === "offers" ? "wydarzenia" : "miejsca"}`}
        text={`Zobacz najnowsze ${
          variant === "offers"
            ? "wydarzenia Lorem Ipsum is simply dummy text of the printing and typesetting industry."
            : "miejsca Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        }`}
      />

      <FilterSection variant={variant} filters={filters} />

      <VerticalCardList list={list} navigation={navigation} />

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
export default List;

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
