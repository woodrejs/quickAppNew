import React from "react";
import { StyleSheet, ScrollView } from "react-native";

// import ScheduleSliderPanel from "../../components/ScheduleSliderPanel";
// import ScheduleCardsList from "../../components/ScheduleCardsList";
// import AddEventButton from "./AddEventButton";

const Schedule = () => {
  return (
    <ScrollView style={style.container}>
      <View style={{ width: "90%" }}>
        <Text
          style={{
            color: COLORS.black,
            fontSize: 30,
            fontFamily: "Montserrat700",
            fontWeight: "700",
            paddingTop: 5,
          }}
        >
          Zaplanuj swój tydzień
        </Text>
        <Text
          style={{
            paddingTop: 15,
            color: COLORS.black,
            fontSize: 12,
            lineHeight: 18,
            fontFamily: "Montserrat400",
            fontWeight: "400",
          }}
        >
          {children}
        </Text>
      </View>

      {/* <ScheduleSliderPanel />
      <ScheduleCardsList />
      <AddEventButton /> */}
    </ScrollView>
  );
};
export default Schedule;

const style = StyleSheet.create({
  container: { padding: 10 },
});
