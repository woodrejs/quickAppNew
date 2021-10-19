import React from "react";
import { View, TouchableWithoutFeedback, StyleSheet } from "react-native";
//style & utils
import { Props } from "./index.utils";
import { COLORS } from "../../../style/colors";

const NavSectionButton: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => navigation.openDrawer();

  const screen =
    navigation.getState().routes[navigation.getState().routes.length - 1].name;

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={style.box}>
        <View style={style.row}>
          <View style={style.sphere} />
          <View style={style.sphere} />
          <View style={style.sphere} />
        </View>
        <View style={style.row}>
          <View style={style.sphere} />
          <View style={style.sphere} />
          <View style={style.sphere} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default NavSectionButton;

const style = StyleSheet.create({
  box: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    height: "100%",
    minWidth: 50,
    minHeight: 50,
    paddingHorizontal: 5,
    position: "relative",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 2,
  },
  sphere: {
    backgroundColor: COLORS.lightnest,
    height: 6,
    width: 6,
    borderRadius: 50,
    marginHorizontal: 2,
  },
});
