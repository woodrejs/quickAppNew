import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//utils & styles
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";
import { stacksNames } from "../../utils/stacksNames";
import { style } from "./index.style";

const SubTitleHeader = ({ navigation, type, title }) => {
  const handlePress = () => {
    switch (type) {
      case "place":
        navigation.navigate(stacksNames.places);
        break;
      case "schedule":
        navigation.navigate(stacksNames.schedule);
        break;
      default:
        navigation.navigate(stacksNames.events);
        break;
    }
  };

  return (
    <TouchableOpacity onPress={handlePress} style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>{title}</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
    </TouchableOpacity>
  );
};

export default SubTitleHeader;
