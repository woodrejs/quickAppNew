import React from "react";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { Stacks } from "../../routes/stacks";
import { View, StyleSheet, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../style/colors";

const MenuCustomDrawer = (props) => {
  const handlePress = (name) => props.navigation.navigate(name);

  return (
    <DrawerContentScrollView {...props} style={style.container}>
      <View style={style.box}>
        <View style={style.icon}>
          <AntDesign name="user" size={30} color="#616161" />
        </View>
        <Text style={style.title}>Witaj {"\n"}username</Text>
      </View>
      {Stacks.map(({ name, icon, id }) => (
        <DrawerItem key={id} label={name} onPress={() => handlePress(name)} icon={icon} />
      ))}
    </DrawerContentScrollView>
  );
};

export default MenuCustomDrawer;

const style = StyleSheet.create({
  container: { backgroundColor: COLORS.lightExtra },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 70,
    paddingBottom: 80,
  },
  icon: {
    backgroundColor: COLORS.darkGrey,
    borderRadius: 50,
    padding: 15,
    marginLeft: 10,
    marginRight: 25,
  },
  title: {
    color: COLORS.black,
    fontFamily: "Montserrat700",
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 22,
    textTransform: "capitalize",
  },
});
