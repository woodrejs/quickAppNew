import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import ScreenTitleSection from "../../components/ScreenTitleSection";
import ScheduleSliderPanel from "../../components/ScheduleSliderPanel";
import ScheduleCardsList from "../../components/ScheduleCardsList";
import AddEventButton from "../../components/AddEventButton";

const Schedule = () => {
  return (
    <ScrollView style={style.container}>
      <ScreenTitleSection title="Zaplanuj swój tydzień" />
      <ScheduleSliderPanel />
      <ScheduleCardsList />
      <AddEventButton />
    </ScrollView>
  );
};
export default Schedule;

const style = StyleSheet.create({
  container: { padding: 10 },
});
