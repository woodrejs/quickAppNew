import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Single from "../screens/Single";
import Schedule from "../screens/Schedule";

const Stack = createStackNavigator();

const ScheduleStack = () => {
  const { schedule, eventSingle } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={schedule} component={Schedule} />
      <Stack.Screen
        name={eventSingle}
        children={({ navigation }) => <Single variant="offers" navigation={navigation} />}
      />
    </Stack.Navigator>
  );
};
export default ScheduleStack;
