import React from "react";
import { View, Text } from "react-native";
//utils & styles
import { Fontisto, Entypo, MaterialIcons } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";
import { style } from "./index.style";
import { Props } from "./index.utils";
import { setTicketed } from "../../../utils";

const HeaderSectionIcon: React.FC<Props> = ({ type, title }) => {
  switch (type) {
    case "ticketing":
      return (
        <View style={style.container}>
          <Entypo name="ticket" size={24} color={COLORS.white} />
          <Text style={style.title}>{setTicketed(title)}</Text>
        </View>
      );
    case "date":
      return (
        <View style={style.container}>
          <Fontisto name="date" size={20} color={COLORS.white} />
          <Text style={style.title}>od {title}</Text>
        </View>
      );
    case "place":
      return (
        <View style={style.container}>
          <MaterialIcons name="place" size={20} color={COLORS.white} />
          <Text style={style.title}>{title}</Text>
        </View>
      );
    default:
      return <View style={style.container}></View>;
  }
};
export default HeaderSectionIcon;
