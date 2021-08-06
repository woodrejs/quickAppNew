import React from "react";
import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { COLORS } from "../../../style/colors";

import { Props } from "./index.utils";
import { style } from "./index.style";

const FormButton: React.FC<Props> = ({ customStyle, label }) => {
  return (
    <View style={[customStyle, style.container]}>
      <Text style={style.title}>{label}</Text>
      <View style={style.button}>
        <AntDesign
          name="arrowright"
          size={35}
          color={COLORS.white}
          onPress={() => console.log("press")}
        />
      </View>
    </View>
  );
};
export default FormButton;
