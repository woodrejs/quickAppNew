import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Home from "../screens/Home";
import EventSingle from "../screens/EventSingle";
import PlaceSingle from "../screens/PlaceSingle";
import Schedule from "../screens/Schedule";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { home, eventSingle, placeSingle, schedule } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={home} component={Home} />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
      <Stack.Screen name={schedule} component={Schedule} />
    </Stack.Navigator>
  );
};
export default HomeStack;
