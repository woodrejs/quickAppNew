import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../style/colors";
import ScheduleListItem from "./ScheduleListItem";

const ScheduleCardsList = () => {
  return (
    <View style={style.container}>
      <Text style={style.title}>Dzisiaj</Text>
      <View>
        <ScheduleListItem />
        <ScheduleListItem />
        <ScheduleListItem />
        {/* <Text style={style.subTitle}>--- Brak wydarzeń ---</Text> */}
      </View>
    </View>
  );
};

export default ScheduleCardsList;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingTop: 40,
    borderTopLeftRadius: 20,
    borderTopEndRadius: 20,
  },
  title: {
    color: COLORS.black,
    fontSize: 24,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "capitalize",
    paddingBottom: 40,
  },
  subTitle: {
    color: COLORS.grey,
    fontSize: 14,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    textTransform: "capitalize",
    textAlign: "center",

    paddingBottom: 60,
    paddingTop: 30,
  },
});
