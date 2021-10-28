import React, { useEffect, useCallback } from "react";
import { ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
//components
import TitleSection from "./TitleSection";
import FilterSection from "./FilterSection";
import VerticalCardList from "./VerticalCardList";
import ListButton from "./ListButton";
//utils & styles
import usePagination from "../../hooks/usePagination";
import useWroclawGO from "../../hooks/useWroclawGO";
import { COLORS } from "../../style/colors";
import { STYLES } from "../../style/styles";

export default React.memo(function List({ variant }) {
  //hooks
  const [paginationCounter, setPaginationCounter] = usePagination(variant);
  const { list, filters } = useSelector(({ listSlice }) => listSlice[variant]);
  const { fetchList } = useWroclawGO(variant);

  //handlers
  const handlePagination = useCallback(() => setPaginationCounter((state) => state + 1));

  //effects
  useEffect(() => {
    fetchList(paginationCounter);
  }, [paginationCounter, filters]);

  return (
    <ScrollView style={style.container}>
      {/* Title Section*/}
      <TitleSection variant={variant} />

      {/* Filter Section */}
      <FilterSection variant={variant} filters={filters} />

      {/* List Section*/}
      {<VerticalCardList list={list} />}

      {/* Pagination button */}
      <ListButton
        handler={handlePagination}
        variant={variant}
        icon="plus"
        styles={style.paginationButton}
      />
    </ScrollView>
  );
});

const style = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    padding: 10,
    backgroundColor: COLORS.extraLight,
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
