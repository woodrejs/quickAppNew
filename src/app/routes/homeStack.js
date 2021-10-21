import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Home from "../screens/Home";
import Single from "../screens/Single";
import Schedule from "../screens/Schedule";
import Search from "../screens/Search";

const Stack = createStackNavigator();

const HomeStack = () => {
  const { home, eventSingle, placeSingle, schedule, search } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={home} component={Home} />
      <Stack.Screen
        name={placeSingle}
        children={({ navigation }) => <Single variant="places" navigation={navigation} />}
      />
      <Stack.Screen
        name={eventSingle}
        children={({ navigation }) => <Single variant="offers" navigation={navigation} />}
      />
      <Stack.Screen name={schedule} component={Schedule} />
      <Stack.Screen name={search} component={Search} />
    </Stack.Navigator>
  );
};
export default HomeStack;
