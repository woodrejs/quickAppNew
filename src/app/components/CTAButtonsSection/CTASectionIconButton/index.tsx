import React from "react";
import { View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
//utils & styles
import { COLORS } from "../../../style/colors";
import { Props } from "./index.utils";
import { style } from "./index.style";

const CTASectionIconButton: React.FC<Props> = ({ type }) => {
  return (
    <View style={style.container}>
      {type === "heart" && <AntDesign name="heart" size={20} color={COLORS.white} />}
      {type === "phone" && <Entypo name="phone" size={26} color={COLORS.white} />}
    </View>
  );
};
export default CTASectionIconButton;
