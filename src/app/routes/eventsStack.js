import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import EventSingle from "../screens/EventSingle";
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
      <Stack.Screen name={eventSingle} component={EventSingle} />
    </Stack.Navigator>
  );
};
export default EventsStack;
