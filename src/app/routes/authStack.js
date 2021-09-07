import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { screensNames } from "../utils/screensNames";
import { screenOptions } from "./utils";

import Login from "../screens/Login";
import Register from "../screens/Register";
import Home from "../screens/Home";

const Stack = createStackNavigator();

const AuthStack = () => {
  const { login, register, home } = screensNames;
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name={login} component={Login} />
      <Stack.Screen name={register} component={Register} />
      <Stack.Screen name={home} component={Home} />
    </Stack.Navigator>
  );
};
export default AuthStack;
