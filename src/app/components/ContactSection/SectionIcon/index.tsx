import React from "react";
import { View, Text } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import { COLORS } from "../../../style/colors";
import { Props } from "./index.utils";
import { style } from "./index.style";

const SectionIcon: React.FC<Props> = ({ title, type }) => {
  return (
    <View style={style.container}>
      {type === "mail" && <AntDesign name="mail" size={15} color={COLORS.grey} />}
      {type === "phone" && <Entypo name="phone" size={15} color={COLORS.grey} />}
      <Text style={style.text}>{title}</Text>
    </View>
  );
};
export default SectionIcon;
