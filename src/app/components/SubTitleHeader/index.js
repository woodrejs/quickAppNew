import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
//utils & styles
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";
import { stacksNames } from "../../utils/stacksNames";
import { style } from "./index.style";
import useFilters from "../../hooks/useFilters";

const SubTitleHeader = ({ navigation, variant, title, filters, children }) => {
  const setFilters = useFilters();

  const handlePress = () => {
    setFilters(variant, filters);
    navigation.navigate(stacksNames[variant]);
  };

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={style.container}>
        <View style={style.box}>
          <Text style={style.title}>{title}</Text>
          <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
        </View>
      </TouchableOpacity>
      <Text style={style.text}>{children}</Text>
    </>
  );
};

export default SubTitleHeader;
