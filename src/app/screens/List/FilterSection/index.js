import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
//components
import FilterSectionButton from "./FilterSectionButton";
import ListButton from "../ListButton";
//utils & styles
import { offers, places } from "./index.data";

import useFilters from "../../../hooks/useFilters";

const FilterSection = ({ variant, filters }) => {
  const [setFilters, updateFilters] = useFilters(variant, filters);
  const data = variant === "offers" ? offers : places;

  const handleButton = () => setFilters();
  const handleItem = (id) => updateFilters(id);

  return (
    <ScrollView style={style.container} horizontal>
      <ListButton handler={handleButton} variant={variant} icon="filter" />
      <View style={style.box}>
        {checkIsActive(data, filters).map((item) => (
          <FilterSectionButton key={item.key} data={item} handler={handleItem} />
        ))}
      </View>
    </ScrollView>
  );
};

export default FilterSection;

const style = StyleSheet.create({
  container: {
    paddingTop: 40,
    paddingBottom: 20,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
});
function checkIsActive(arr1, arr2) {
  let counter = {};

  arr2.forEach((item) => (counter[item] = true));

  return arr1.map((item) => {
    if (counter[item.id]) {
      const itemClone = { ...item };
      itemClone.active = true;
      return itemClone;
    }
    return item;
  });
}
