import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import CardBody from "./CardBody";
import { style } from "./index.style";
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";

const ScheduleCard = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>Twój Terminarz</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
      <TouchableHighlight>
        <CardBody />
      </TouchableHighlight>
    </View>
  );
};
export default ScheduleCard;
