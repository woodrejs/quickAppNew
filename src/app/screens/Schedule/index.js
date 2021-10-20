import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { STYLES } from "../../style/styles";

// import ScheduleSliderPanel from "../../components/ScheduleSliderPanel";
// import ScheduleCardsList from "../../components/ScheduleCardsList";
// import AddEventButton from "./AddEventButton";

const Schedule = () => {
  return (
    <ScrollView style={style.container}>
      <View style={{ width: "90%" }}>
        <Text
          style={{
            fontSize: 30,
            fontFamily: STYLES.fonts.bold,
            paddingTop: 5,
          }}
        >
          Zaplanuj swój tydzień
        </Text>
        <Text
          style={{
            paddingTop: 15,

            fontSize: 12,
            lineHeight: 18,
            fontFamily: STYLES.fonts.regular,
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
