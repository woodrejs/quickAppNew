import React, { useMemo, useState, useEffect, useCallback } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { useDispatch } from "react-redux";
//components
import FilterSectionButton from "./FilterSectionButton";
import ListButton from "../ListButton";
//utils
import { offers, places } from "./index.data";
import { setFilters } from "../../../redux/list.slice";

export default React.memo(function FilterSection({ variant, filters }) {
  //hooks
  const [list, setList] = useState({});
  const dispatch = useDispatch();

  //const
  const data = useMemo(() => {
    const itemList = variant === "offers" ? offers : places;
    return itemList.sort((a, b) => {
      const item1 = list[a.id];
      const item2 = list[b.id];

      if (item1 && !item2) return -1;
      if (!item1 && item2) return 1;
      if (item1 === item2) return 0;
    });
  }, [variant, list]);

  //handlers
  const handleItem = useCallback(
    (id, isActive) => {
      const clone = { ...list };
      clone[id] = isActive;
      setList(clone);
    },
    [list]
  );
  const handleButton = useCallback(() => {
    const clone = { ...list };
    let result = [];
    for (const item in clone) {
      if (Object.hasOwnProperty.call(clone, item)) {
        const element = clone[item];

        if (element) result.push(item);
      }
    }

    dispatch(setFilters([variant, result]));
  }, [list, variant]);

  //effects
  useEffect(() => {
    let counter = {};
    filters.forEach((item) => (counter[item] = true));
    setList(counter);
  }, [filters]);

  return (
    <ScrollView style={style.container} horizontal>
      <ListButton handler={handleButton} variant={variant} icon="filter" />
      <View style={style.box}>
        {data.map((item) => (
          <FilterSectionButton
            key={item.key}
            data={item}
            handler={handleItem}
            active={list[item.id] ?? false}
          />
        ))}
      </View>
    </ScrollView>
  );
});

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
