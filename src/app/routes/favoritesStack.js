import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import FavoritesList from "../screens/FavoritesList";
import Single from "../screens/Single";

const Stack = createStackNavigator();

const FavoritesStack = () => {
  const { favoritesList, eventSingle, placeSingle } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={favoritesList} component={FavoritesList} />
      <Stack.Screen
        name={eventSingle}
        children={({ navigation }) => <Single variant="offers" navigation={navigation} />}
      />
      <Stack.Screen
        name={placeSingle}
        children={({ navigation }) => <Single variant="places" navigation={navigation} />}
      />
    </Stack.Navigator>
  );
};
export default FavoritesStack;
