import React from "react";
import { View, TouchableOpacity } from "react-native";
//utils & styles
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { style } from "./index.style";
import { stacksNames } from "../../../utils/stacksNames";

const HorizontalListButton = ({ navigation, type }) => {
  const handlePress = () => {
    switch (type) {
      case "place":
        navigation.navigate(stacksNames.places);
        break;
      default:
        navigation.navigate(stacksNames.events);
        break;
    }
  };
  return (
    <TouchableOpacity style={style.container} onPress={handlePress}>
      <View style={style.box}>
        <AntDesign name="plus" size={24} color={COLORS.white} />
      </View>
    </TouchableOpacity>
  );
};

export default HorizontalListButton;
