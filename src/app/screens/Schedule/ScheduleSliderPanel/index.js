import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";

import { COLORS } from "../../style/colors";
import SchedulePanelButton from "./SchedulePanelButton";
import SchedulePanelCard from "./SchedulePanelCard";

const ScheduleSliderPanel = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <SchedulePanelButton title="Obecny tydzien" />
        <SchedulePanelButton title="następny tydzien" />
      </View>
      <ScrollView style={style.slider} horizontal>
        <SchedulePanelCard date="02" day="pon" />
        <SchedulePanelCard date="03" day="wto" />
        <SchedulePanelCard date="04" day="śro" />
        <SchedulePanelCard date="05" day="czw" />
        <SchedulePanelCard date="06" day="pią" />
        <SchedulePanelCard date="07" day="sob" />
        <SchedulePanelCard date="08" day="nie" />
      </ScrollView>
    </View>
  );
};

export default ScheduleSliderPanel;

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
