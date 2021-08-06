import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions, screensName } from "./utils";

import EventSingle from "../screens/EventSingle";
import EventList from "../screens/EventList";

const Stack = createStackNavigator();
const { eventList, eventSingle } = screensName;

const EventsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={eventList} component={EventList} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
    </Stack.Navigator>
  );
};
export default EventsStack;
