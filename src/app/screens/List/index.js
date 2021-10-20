import React, { useEffect } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
//components
import FilterSection from "./FilterSection";
import VerticalCardList from "./VerticalCardList";
import LoadingSection from "../../components/LoadingSection";
import ListButton from "./ListButton";
//utils & styles
import usePagination from "../../hooks/usePagination";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";
import TitleSection from "./TitleSection";
import useWroclawGO from "../../hooks/useWroclawGO";

//todo: pozbyc sie img.standard na rzecz img
export default function List({ navigation, variant }) {
  const [paginationCounter, setPaginationCounter] = usePagination(variant);
  const [setItemList] = useWroclawGO(variant);
  const { list, filters, loaded } = useSelector(({ listSlice }) => listSlice[variant]);

  const handlePagination = () => setPaginationCounter((state) => state + 1);

  useEffect(() => {
    setItemList(paginationCounter);
  }, [paginationCounter, filters]);

  if (!loaded) return <LoadingSection />;

  return (
    <ScrollView style={style.container}>
      {/* Title Section*/}
      <TitleSection variant={variant} />

      {/* Filter Section */}
      <FilterSection variant={variant} filters={filters} />

      {/* List Section*/}
      {list && <VerticalCardList list={list} navigation={navigation} />}

      {/* Pagination button */}
      <ListButton
        handler={handlePagination}
        variant={variant}
        icon="plus"
        customStyle={style.paginationButton}
      />
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.extra,
    paddingTop: 40,
  },
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingBottom: 15 },
  text: { ...STYLES.fonts.regular, fontSize: 12, opacity: 0.8, lineHeight: 16 },

  paginationButton: {
    marginBottom: 60,
    marginTop: -10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
