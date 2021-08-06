import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions, screensName } from "./utils";

import Settings from "../screens/Settings";

const Stack = createStackNavigator();
const { settings } = screensName;

const SettingsStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={settings} component={Settings} />
    </Stack.Navigator>
  );
};
export default SettingsStack;
