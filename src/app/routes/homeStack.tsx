import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions, screensName } from "./utils";

import Home from "../screens/Home";
import EventSingle from "../screens/EventSingle";
import PlaceSingle from "../screens/PlaceSingle";

const Stack = createStackNavigator();
const { home, eventSingle, placeSingle } = screensName;

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={eventSingle} component={EventSingle} />
      <Stack.Screen name={home} component={Home} />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
    </Stack.Navigator>
  );
};
export default HomeStack;
