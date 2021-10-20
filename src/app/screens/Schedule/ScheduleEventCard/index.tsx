import React from "react";
import { View, Text, TouchableHighlight } from "react-native";

import ScheduleCardContent from "./ScheduleCardContent";
import { style } from "./index.style";
import { COLORS } from "../../style/colors";
import { Fontisto } from "@expo/vector-icons";

const ScheduleEventCard = () => {
  return (
    <View style={style.container}>
      <View style={style.box}>
        <Text style={style.title}>Twój Terminarz</Text>
        <Fontisto name="eye" size={14} color={COLORS.lightExtra} />
      </View>
      <TouchableHighlight>
        <ScheduleCardContent />
      </TouchableHighlight>
    </View>
  );
};
export default ScheduleEventCard;
