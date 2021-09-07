import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Home from "../screens/Home";
import EventSingle from "../screens/EventSingle";
import PlaceSingle from "../screens/PlaceSingle";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { home, eventSingle, placeSingle } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={home} component={Home} />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
    </Stack.Navigator>
  );
};
export default HomeStack;
