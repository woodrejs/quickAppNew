import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import { stacksNames } from "./utils";

import HomeStack from "./homeStack";
import EventsStack from "./eventsStack";
import PlacesStack from "./placesStack";
import ScheduleStack from "./scheduleStack";
import FavoritesStack from "./favoritesStack";
import AuthStack from "./authStack";
import SettingsStack from "./settingsStack";

const Drawer = createDrawerNavigator();
const {
  homeStackName,
  favoritesStackName,
  placesStackName,
  eventsStackName,
  scheduleStackName,
  settingsStackName,
  authStackName,
} = stacksNames;

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={homeStackName}
        screenOptions={{ headerShown: false }}
      >
        {/* screens */}
        <Drawer.Screen name={homeStackName} component={HomeStack} />
        <Drawer.Screen name={favoritesStackName} component={FavoritesStack} />
        <Drawer.Screen name={placesStackName} component={PlacesStack} />
        <Drawer.Screen name={eventsStackName} component={EventsStack} />
        <Drawer.Screen name={scheduleStackName} component={ScheduleStack} />

        {/* user settings */}
        <Drawer.Screen name={settingsStackName} component={SettingsStack} />
        <Drawer.Screen name={authStackName} component={AuthStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
