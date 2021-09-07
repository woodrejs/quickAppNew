import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Settings from "../screens/Settings";

const Stack = createStackNavigator();

const SettingsStack = ({}) => {
  const { settings } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={settings} component={Settings} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
