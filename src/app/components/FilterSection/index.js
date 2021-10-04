import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
//components
import FilterSectionButton from "./FilterSectionButton";
import IconButton from "../IconButton";
//utils & styles
import { offers, places } from "./index.data";
import { setFilters as addOfferFilter } from "../../redux/listOffer.slice";
import { setFilters as addPlaceFilter } from "../../redux/listPlace.slice";

const FilterSection = ({ variant, filters }) => {
  const [filtersList, setFiltersList] = useState(filters);
  const dispatch = useDispatch();
  const data = variant === "offers" ? offers : places;

  const handleButton = () => {
    variant === "offers"
      ? dispatch(addOfferFilter(filtersList))
      : dispatch(addPlaceFilter(filtersList));
  };
  const handleItem = (id) => {
    let filter = { isActive: false, index: null };

    if (!filtersList.length) {
      setFiltersList([id]);
      return;
    }
    filtersList.forEach((item, index) => {
      if (item === id) {
        filter = { isActive: true, index };
      }
    });

    const filtersClone = [...filtersList];

    if (filter.isActive) {
      filtersClone.splice(filter.index, 1);
      setFiltersList(filtersClone);
    } else {
      setFiltersList([...filtersClone, id]);
    }
  };

  return (
    <ScrollView style={style.container} horizontal>
      <IconButton handler={handleButton} variant="plus" />
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
