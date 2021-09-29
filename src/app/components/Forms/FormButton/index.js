import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";

import { Props } from "./index.utils";
import { style } from "./index.style";

const FormButton = ({ customStyle, label, press }) => {
  return (
    <View style={[customStyle, style.container]}>
      <Text style={style.title}>{label}</Text>
      <TouchableOpacity style={style.button} onPress={press}>
        <AntDesign name="arrowright" size={35} color={COLORS.white} onPress={press} />
      </TouchableOpacity>
    </View>
  );
};
export default FormButton;
