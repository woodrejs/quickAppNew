import React, { useCallback } from "react";
import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
//coponents
import List from "./List";
import ButtonIcon from "../../components/ButtonIcon";
//utils
import { STYLES } from "../../style/styles";
import { stacksNames } from "../../utils/stacksNames";

export default React.memo(function Schedule() {
  //hooks
  const { schedules, logged } = useSelector(({ userSlice }) => userSlice);
  const navigation = useNavigation();

  //const
  const [todayList, restList] = filterSchedules(schedules);

  //handlers
  const handleButton = useCallback(() => navigation.navigate(stacksNames.offers));

  if (!logged)
    return (
      <View style={style.box}>
        <Text style={style.subText}>
          Żeby dodawać do ulubionych, musisz być zalogowany.
        </Text>
      </View>
    );

  return (
    <ScrollView style={style.container}>
      <Text style={style.title}>Twój Terminarz</Text>

      <List title="Dzisiaj" list={todayList} />
      <List title="Pozostałe" list={restList} />

      <View style={style.buttonBox}>
        <ButtonIcon
          name="plus"
          size="md"
          handler={handleButton}
          active
          styles={style.button}
        />
      </View>
    </ScrollView>
  );
});

const { width, height } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    width,
    height,
    padding: 10,
  },
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  subText: {
    ...STYLES.fonts.bold,
    fontSize: 16,
    textAlign: "center",
    maxWidth: 300,
    opacity: 0.5,
  },
  title: { ...STYLES.fonts.bold, fontSize: 28, paddingBottom: 40, paddingTop: 20 },
  buttonBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  button: { marginBottom: 0 },
});

//!!!important!!!
function filterSchedules(arr) {
  let today = [];
  let rest = [];

  const todayDate = new Date().toISOString().slice(0, 10);

  arr.forEach((schedule) => {
    const date = schedule.date.slice(0, 10);

    if (date === todayDate) {
      today.push(schedule);
    } else {
      rest.push(schedule);
    }
  });

  return [today, rest];
}
