import React from "react";
import { View, Text } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORS } from "../../../style/colors";
import { style } from "./index.style";
import { Props } from "./index.utils";

const HeaderSectionIcon: React.FC<Props> = ({ type, title }) => {
  return (
    <View style={style.container}>
      {type === "hour" && <Fontisto name="clock" size={20} color={COLORS.white} />}
      {type === "date" && <Fontisto name="date" size={20} color={COLORS.white} />}
      {type === "place" && <MaterialIcons name="place" size={20} color={COLORS.white} />}

      <Text style={style.title}>{title}</Text>
    </View>
  );
};
export default HeaderSectionIcon;
