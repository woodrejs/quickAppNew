import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { COLORS } from "../../style/colors";
import WeekSliderButton from "./WeekSliderButton";
import WeekSliderItem from "./WeekSliderItem";

const WeekSlider = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <WeekSliderButton title="Obecny tydzien" />
        <WeekSliderButton title="następny tydzien" />
      </View>
      <ScrollView style={style.slider} horizontal>
        <WeekSliderItem date="02" day="pon" />
        <WeekSliderItem date="03" day="wto" />
        <WeekSliderItem date="04" day="śro" />
        <WeekSliderItem date="05" day="czw" />
        <WeekSliderItem date="06" day="pią" />
        <WeekSliderItem date="07" day="sob" />
        <WeekSliderItem date="08" day="nie" />
      </ScrollView>
    </View>
  );
};

export default WeekSlider;

const style = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    display: "flex",
    justifyContent: "center",
    marginBottom: 10,
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  slider: { marginTop: 20, paddingVertical: 5 },
});
