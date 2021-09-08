import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

//components
import MenuCustomDrawer from "../components/MenuCustomDrawer";

//utils
import { Stacks } from "./stacks";

const Drawer = createDrawerNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={"homeStack"}
        screenOptions={{ headerShown: false }}
        drawerContent={MenuCustomDrawer}
      >
        {Stacks.map(({ name, component, id }) => (
          <Drawer.Screen key={id} name={name} component={component} />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
export default Navigation;
