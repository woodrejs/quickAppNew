import React from "react";
import { View, Text } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { COLORS } from "../../../style/colors";
import { style } from "./index.style";
import { Props } from "./index.utils";

const InfoSectionIcon: React.FC<Props> = ({ title, type }) => {
  return (
    <View style={style.container}>
      {type === "food" && <FontAwesome name="cutlery" size={34} color={COLORS.grey} />}
      {type === "disabled" && (
        <FontAwesome5 name="wheelchair" size={34} color={COLORS.grey} />
      )}
      {type === "parking" && (
        <MaterialIcons name="local-parking" size={34} color={COLORS.grey} />
      )}
      <Text style={style.title}>{title}</Text>
    </View>
  );
};
export default InfoSectionIcon;
