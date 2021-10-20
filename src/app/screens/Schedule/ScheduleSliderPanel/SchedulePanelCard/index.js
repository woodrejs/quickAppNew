import React from "react";
import { View, StyleSheet, Text } from "react-native";

import { COLORS } from "../../../style/colors";
import { STYLES } from "../../../style/styles";

const SchedulePanelCard = ({ date, day }) => {
  return (
    <View style={style.container}>
      <Text style={style.date}>{date}</Text>
      <Text style={style.day}>{day}</Text>
    </View>
  );
};

export default SchedulePanelCard;

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
    fontSize: 24,
    fontFamily: STYLES.fonts.bold,
  },
  day: {
    fontSize: 14,
    fontFamily: STYLES.fonts.regular,
    textTransform: "uppercase",
  },
});
