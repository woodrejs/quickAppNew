import React from "react";
import { View, Text, TouchableHighlight } from "react-native";
//utils & styles
import { COLORS } from "../../../style/colors";
import { Fontisto } from "@expo/vector-icons";
import { stacksNames } from "../../../utils/stacksNames";
import { style } from "./index.style";

const HorizontalListHeader = ({ navigation, type, title }) => {
  const handlePress = () => {
    type === "place"
      ? navigation.navigate(stacksNames.places)
      : navigation.navigate(stacksNames.events);
  };

  return (
    <TouchableHighlight onPress={handlePress}>
      <View style={style.box}>
        <Text style={style.title}>{title}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
    </TouchableHighlight>
  );
};

export default HorizontalListHeader;
