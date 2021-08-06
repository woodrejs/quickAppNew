import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screenOptions, screensName } from "./utils";

import FavoritesList from "../screens/FavoritesList";
import EventSingle from "../screens/EventSingle";
import PlaceSingle from "../screens/PlaceSingle";

const Stack = createStackNavigator();
const { favoritesList, eventSingle, placeSingle } = screensName;

const FavoritesStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={favoritesList} component={FavoritesList} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
