import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import TitleSection from "../../components/TitleSection";
import WeekSlider from "../../components/WeekSlider";
import ScheduleList from "../../components/ScheduleList";
import ScheduleButton from "../../components/ScheduleButton";

const Schedule = () => {
  return (
    <ScrollView style={style.container}>
      <TitleSection title="Zaplanuj swój tydzień" />
      <WeekSlider />
      <ScheduleList />
      <ScheduleButton />
    </ScrollView>
  );
};
export default Schedule;

const style = StyleSheet.create({
  container: { padding: 10 },
});
