import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../style/colors";

const WeekSliderItem = ({ date, day }) => {
  return (
    <View style={style.container}>
      <Text style={style.date}>{date}</Text>
      <Text style={style.day}>{day}</Text>
    </View>
  );
};

export default WeekSliderItem;

const style = StyleSheet.create({
  container: {
    height: 85,
    width: 85,
    backgroundColor: COLORS.lightgrey,
    borderRadius: 20,
    marginRight: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  date: {
    color: COLORS.black,
    fontSize: 24,
    fontFamily: "Montserrat700",
    fontWeight: "700",
  },
  day: {
    color: COLORS.black,
    fontSize: 14,
    fontFamily: "Montserrat400",
    fontWeight: "400",
    textTransform: "uppercase",
  },
});
