import React from "react";
import { View } from "react-native";
//utils & styles
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { style } from "./index.style";

const HorizontalListButton = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <AntDesign name="plus" size={24} color={COLORS.white} />
      </View>
    </View>
  );
};

export default HorizontalListButton;
