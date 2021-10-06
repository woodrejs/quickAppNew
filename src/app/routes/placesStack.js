import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import PlaceSingle from "../screens/PlaceSingle";
import List from "../screens/List";

const Stack = createStackNavigator();

const PlacesStack = () => {
  const { placeSingle, placeList } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen
        name={placeList}
        children={({ navigation }) => <List variant="places" navigation={navigation} />}
      />
      <Stack.Screen name={placeSingle} component={PlaceSingle} />
    </Stack.Navigator>
  );
};
export default PlacesStack;
