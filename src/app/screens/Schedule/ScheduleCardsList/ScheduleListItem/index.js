import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";
import ListItemButton from "./ListItemButton";

const ScheduleListItem = () => {
  return (
    <View style={style.container}>
      <Text style={style.hour}>19:00</Text>
      <View style={style.box}>
        <View style={style.content}>
          <Text style={style.title}>nazwa jakiegos wydarzenia</Text>
          <Text style={style.subTitle}>nul. Obornicka 22/20 51-113 Wrocław</Text>
        </View>
        <ListItemButton />
      </View>
    </View>
  );
};

export default ScheduleListItem;

const style = StyleSheet.create({
  container: { display: "flex", alignItems: "center", marginBottom: 20 },
  hour: {
    color: COLORS.grey,
    paddingBottom: 5,
    fontSize: 14,
    fontFamily: STYLES.fonts.bold,
  },
  box: {
    backgroundColor: COLORS.lightgrey,
    borderRadius: 20,
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 25,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {},
  title: {
    color: COLORS.black,
    fontSize: 18,
    fontFamily: STYLES.fonts.bold,
    textTransform: "capitalize",
  },
  subTitle: {
    color: COLORS.black,
    fontSize: 10,
    fontFamily: STYLES.fonts.regular,
  },
});
