import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import FavoritesList from "../screens/FavoritesList";
import EventSingle from "../screens/EventSingle";
import PlaceSingle from "../screens/PlaceSingle";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  const { favoritesList, eventSingle, placeSingle } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={favoritesList} component={FavoritesList} />
      <Stack.Screen name={eventSingle} component={EventSingle} />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
