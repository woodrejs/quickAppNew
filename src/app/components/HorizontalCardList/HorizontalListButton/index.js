import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
//utils & styles
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { style } from "./index.style";
import { stacksNames } from "../../../utils/stacksNames";
import useFilters from "../../../hooks/useFilters";

const HorizontalListButton = ({ navigation, variant, filters }) => {
  const setFilters = useFilters();

  const handlePress = () => {
    setFilters(variant, filters);
    navigation.navigate(stacksNames[variant]);
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
