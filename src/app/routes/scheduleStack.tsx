import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions, screensName } from "./utils";

import EventSingle from "../screens/EventSingle";
import Schedule from "../screens/Schedule";

const Stack = createStackNavigator();
const { schedule, eventSingle } = screensName;

const ScheduleStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={schedule} component={Schedule} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
    </Stack.Navigator>
  );
};
export default ScheduleStack;
