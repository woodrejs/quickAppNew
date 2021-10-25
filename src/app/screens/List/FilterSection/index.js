import React, { useMemo, useCallback } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
//components
import FilterSectionButton from "./FilterSectionButton";
import ListButton from "../ListButton";
//utils
import useFilters from "../../../hooks/useFilters";
import { offers, places } from "./index.data";

export default React.memo(function FilterSection({ variant, filters }) {
  //hooks
  const [setFilters, updateFilters] = useFilters(variant, filters);

  //const
  const data = useMemo(() => (variant === "offers" ? offers : places), [variant]);

  //handlers
  const handleItem = useCallback((id) => updateFilters(id));

  return (
    <ScrollView style={style.container} horizontal>
      <ListButton handler={setFilters()} variant={variant} icon="filter" />
      <View style={style.box}>
        {checkIsActive(data, filters).map((item) => (
          <FilterSectionButton key={item.key} data={item} handler={handleItem} />
        ))}
      </View>
    </ScrollView>
  );
});

//!!!important!!! is use somewhere else
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
