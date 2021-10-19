import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Single from "../screens/Single";
import List from "../screens/List";

const Stack = createStackNavigator();

const EventsStack = () => {
  const { eventList, eventSingle } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={eventList}
        children={({ navigation }) => <List variant="offers" navigation={navigation} />}
      />
      <Stack.Screen
        name={eventSingle}
        children={({ navigation }) => <Single variant="offers" navigation={navigation} />}
      />
    </Stack.Navigator>
  );
};
export default EventsStack;
